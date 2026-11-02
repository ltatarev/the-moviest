import { describe, expect, it } from 'vitest';
import { isTmdbImagePath } from './imagePath';
import { safeNextPath } from './nextPath';
import {
  getStudioConfig,
  hashPassword,
  parsePasswordHash,
  signSession,
  verifyPassword,
  verifySession,
} from './session';

const SECRET = 'a'.repeat(43);

describe('sessions', () => {
  it('accepts a fresh session', () => {
    expect(verifySession(signSession(SECRET, 1), SECRET, 1)).toBe(true);
  });

  it('rejects an expired session', () => {
    const token = signSession(SECRET, 1, Date.now() - 31 * 24 * 3600 * 1000);

    expect(verifySession(token, SECRET, 1)).toBe(false);
  });

  it('rejects a tampered payload', () => {
    const [, signature] = signSession(SECRET, 1).split('.');
    const forged = Buffer.from(
      JSON.stringify({ exp: 9_999_999_999, v: 1 }),
    ).toString('base64url');

    expect(verifySession(`${forged}.${signature}`, SECRET, 1)).toBe(false);
  });

  it('rejects a tampered signature, a wrong secret and junk', () => {
    const token = signSession(SECRET, 1);

    expect(verifySession(`${token}x`, SECRET, 1)).toBe(false);
    expect(verifySession(token, 'b'.repeat(43), 1)).toBe(false);
    expect(verifySession('nope', SECRET, 1)).toBe(false);
    expect(verifySession('', SECRET, 1)).toBe(false);
    expect(verifySession(undefined, SECRET, 1)).toBe(false);
  });

  it('rejects an old session version', () => {
    expect(verifySession(signSession(SECRET, 1), SECRET, 2)).toBe(false);
  });
});

describe('passwords', () => {
  // Small N keeps the test fast; production uses 2^15.
  const options = { N: 2 ** 10, r: 8, p: 1 };

  it('verifies the right password only', async () => {
    const stored = await hashPassword('correct horse battery staple', options);

    expect(await verifyPassword('correct horse battery staple', stored)).toBe(
      true,
    );
    expect(await verifyPassword('correct horse battery stapler', stored)).toBe(
      false,
    );
    expect(await verifyPassword('', stored)).toBe(false);
    expect(await verifyPassword(undefined, stored)).toBe(false);
    expect(await verifyPassword({ toString: () => 'x' }, stored)).toBe(false);
  });

  it('rejects malformed hashes', async () => {
    expect(parsePasswordHash('scrypt$1$2$3$4$5')).toBeNull();
    expect(parsePasswordHash('bcrypt:16384:8:1:abc:def')).toBeNull();
    expect(parsePasswordHash('scrypt:1000:8:1:abc:def')).toBeNull();
    expect(await verifyPassword('anything', 'garbage')).toBe(false);
  });

  it('uses no dollar signs (Next would expand them in .env files)', async () => {
    expect(await hashPassword('x'.repeat(20), options)).not.toContain('$');
  });
});

describe('config', () => {
  it('is null unless both values are present and sane', async () => {
    const hash = await hashPassword('x'.repeat(20), { N: 2 ** 10 });

    expect(getStudioConfig({})).toBeNull();
    expect(getStudioConfig({ STUDIO_PASSWORD_HASH: hash })).toBeNull();
    expect(
      getStudioConfig({
        STUDIO_PASSWORD_HASH: hash,
        STUDIO_SESSION_SECRET: 'short',
      }),
    ).toBeNull();
    expect(
      getStudioConfig({
        STUDIO_PASSWORD_HASH: 'nope',
        STUDIO_SESSION_SECRET: SECRET,
      }),
    ).toBeNull();
    expect(
      getStudioConfig({
        STUDIO_PASSWORD_HASH: hash,
        STUDIO_SESSION_SECRET: SECRET,
        STUDIO_SESSION_VERSION: '3',
      }),
    ).toMatchObject({ version: 3 });
  });
});

describe('next path', () => {
  it('only allows studio paths', () => {
    expect(safeNextPath('/studio/heatmap')).toBe('/studio/heatmap');
    expect(safeNextPath('/studio')).toBe('/studio');
    expect(safeNextPath('/studio/heatmap?x=1')).toBe('/studio/heatmap?x=1');
    expect(safeNextPath('https://evil.example')).toBe('/studio');
    expect(safeNextPath('//evil.example/studio')).toBe('/studio');
    expect(safeNextPath('/studio//evil.example')).toBe('/studio');
    expect(safeNextPath('/studio\\evil')).toBe('/studio');
    expect(safeNextPath('/studio/../home')).toBe('/studio');
    expect(safeNextPath('/studiofoo')).toBe('/studio');
    expect(safeNextPath('/home')).toBe('/studio');
    expect(safeNextPath('/studio/login')).toBe('/studio');
    expect(safeNextPath(['/studio/a'])).toBe('/studio');
  });
});

describe('image path', () => {
  it('accepts TMDB image paths only', () => {
    expect(isTmdbImagePath('/w780/abc123.jpg')).toBe(true);
    expect(isTmdbImagePath('/original/a_b-c.png')).toBe(true);
    expect(isTmdbImagePath('/w780/../secret.jpg')).toBe(false);
    expect(isTmdbImagePath('/w780/a/b.jpg')).toBe(false);
    expect(isTmdbImagePath('https://evil.example/a.jpg')).toBe(false);
    expect(isTmdbImagePath('//evil.example/w780/a.jpg')).toBe(false);
    expect(isTmdbImagePath('/w780/a.jpg?x=1')).toBe(false);
    expect(isTmdbImagePath('/w780/a.jpg#x')).toBe(false);
    expect(isTmdbImagePath('/w780/a.svg')).toBe(false);
    expect(isTmdbImagePath('/large/a.jpg')).toBe(false);
    expect(isTmdbImagePath(['/w780/a.jpg'])).toBe(false);
  });
});
