import crypto from 'node:crypto';
import { promisify } from 'node:util';

/**
 * Studio auth primitives. Deliberately separate from the site's user auth
 * (`JWT_SECRET`, `userPlugin.ts`): one password, one signed cookie, no users.
 *
 * Kept free of Next imports so `src/proxy.ts`, the API routes and the tests
 * can all share it.
 */

export const STUDIO_COOKIE = 'studio_session';
export const SESSION_MAX_AGE_SECONDS = 30 * 24 * 60 * 60;

/** Below this many characters the session secret is treated as missing. */
const MIN_SECRET_LENGTH = 32;
/** Longer inputs are rejected before hashing; nobody types a 1KB password. */
const MAX_PASSWORD_LENGTH = 1024;

export type StudioConfig = {
  passwordHash: string;
  secret: string;
  version: number;
};

/**
 * Null when the studio is not configured. Callers must then refuse every
 * studio request: a missing secret never means "no auth".
 */
export function getStudioConfig(
  env: Record<string, string | undefined> = process.env,
): StudioConfig | null {
  const passwordHash = env.STUDIO_PASSWORD_HASH?.trim();
  const secret = env.STUDIO_SESSION_SECRET?.trim();

  if (!passwordHash || !secret || secret.length < MIN_SECRET_LENGTH) {
    return null;
  }

  if (!parsePasswordHash(passwordHash)) {
    return null;
  }

  const version = Number.parseInt(env.STUDIO_SESSION_VERSION ?? '1', 10);

  return {
    passwordHash,
    secret,
    version: Number.isFinite(version) ? version : 1,
  };
}

function toBase64Url(input: Buffer | string): string {
  return Buffer.from(input).toString('base64url');
}

function hmac(payload: string, secret: string): Buffer {
  return crypto.createHmac('sha256', secret).update(payload).digest();
}

/** `base64url(JSON {exp, v}) + "." + base64url(HMAC-SHA256 of the first part)`. */
export function signSession(
  secret: string,
  version: number,
  now: number = Date.now(),
): string {
  const exp = Math.floor(now / 1000) + SESSION_MAX_AGE_SECONDS;
  const payload = toBase64Url(JSON.stringify({ exp, v: version }));

  return `${payload}.${toBase64Url(hmac(payload, secret))}`;
}

export function verifySession(
  token: string | undefined | null,
  secret: string,
  version: number,
  now: number = Date.now(),
): boolean {
  if (!token || token.length > 512) {
    return false;
  }

  const parts = token.split('.');

  if (parts.length !== 2 || !parts[0] || !parts[1]) {
    return false;
  }

  const [payload, signature] = parts;
  const expected = hmac(payload, secret);
  const given = Buffer.from(signature, 'base64url');

  if (
    given.length !== expected.length ||
    !crypto.timingSafeEqual(given, expected)
  ) {
    return false;
  }

  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));

    return (
      typeof data?.exp === 'number' &&
      data.exp > Math.floor(now / 1000) &&
      data.v === version
    );
  } catch {
    return false;
  }
}

type ParsedHash = {
  N: number;
  r: number;
  p: number;
  salt: Buffer;
  hash: Buffer;
};

/**
 * `scrypt:N:r:p:saltB64url:hashB64url`. Colons, not dollar signs: Next's
 * dotenv expansion would eat `$…` segments in `.env.local`.
 */
export function parsePasswordHash(stored: string): ParsedHash | null {
  const parts = stored.split(':');

  if (parts.length !== 6 || parts[0] !== 'scrypt') {
    return null;
  }

  const [, n, r, p, salt, hash] = parts;
  const parsed = {
    N: Number(n),
    r: Number(r),
    p: Number(p),
    salt: Buffer.from(salt, 'base64url'),
    hash: Buffer.from(hash, 'base64url'),
  };

  const isPowerOfTwo = parsed.N > 1 && (parsed.N & (parsed.N - 1)) === 0;

  if (
    !isPowerOfTwo ||
    parsed.N > 2 ** 20 ||
    !Number.isInteger(parsed.r) ||
    parsed.r < 1 ||
    parsed.r > 32 ||
    !Number.isInteger(parsed.p) ||
    parsed.p < 1 ||
    parsed.p > 16 ||
    parsed.salt.length < 16 ||
    parsed.hash.length < 32
  ) {
    return null;
  }

  return parsed;
}

const scrypt = promisify(crypto.scrypt) as (
  password: crypto.BinaryLike,
  salt: crypto.BinaryLike,
  keylen: number,
  options: crypto.ScryptOptions,
) => Promise<Buffer>;

export async function verifyPassword(
  password: unknown,
  stored: string,
): Promise<boolean> {
  if (
    typeof password !== 'string' ||
    password.length === 0 ||
    password.length > MAX_PASSWORD_LENGTH
  ) {
    return false;
  }

  const parsed = parsePasswordHash(stored);

  if (!parsed) {
    return false;
  }

  const derived = await scrypt(password, parsed.salt, parsed.hash.length, {
    N: parsed.N,
    r: parsed.r,
    p: parsed.p,
    maxmem: 256 * parsed.N * parsed.r,
  });

  return crypto.timingSafeEqual(derived, parsed.hash);
}

/** Only for the hash script and tests; production verifies, never hashes. */
export async function hashPassword(
  password: string,
  { N = 2 ** 15, r = 8, p = 1 } = {},
): Promise<string> {
  const salt = crypto.randomBytes(16);
  const hash = await scrypt(password, salt, 32, {
    N,
    r,
    p,
    maxmem: 256 * N * r,
  });

  return ['scrypt', N, r, p, toBase64Url(salt), toBase64Url(hash)].join(':');
}
