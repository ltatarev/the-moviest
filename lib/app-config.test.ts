import type { NextApiRequest, NextApiResponse } from 'next';
import { describe, expect, it } from 'vitest';
import appConfig from '../config/app-config.json';
import handler, { CACHE_CONTROL } from '../src/pages/api/app-config';

const SEMVER = /^\d+\.\d+\.\d+$/;

function call(method: string) {
  const headers: Record<string, string> = {};
  const result = { status: 0, body: undefined as unknown, headers };
  const res = {
    setHeader(name: string, value: string) {
      headers[name.toLowerCase()] = value;
      return res;
    },
    status(code: number) {
      result.status = code;
      return res;
    },
    json(body: unknown) {
      result.body = body;
      return res;
    },
  };

  handler({ method } as NextApiRequest, res as unknown as NextApiResponse);

  return result;
}

describe('GET /api/app-config', () => {
  it('returns the config with the cache headers', () => {
    const { status, body, headers } = call('GET');

    expect(status).toBe(200);
    expect(body).toEqual(appConfig);
    expect(headers['content-type']).toBe('application/json');
    expect(headers['cache-control']).toBe(
      'public, max-age=0, s-maxage=300, stale-while-revalidate=86400',
    );
    expect(CACHE_CONTROL).toBe(headers['cache-control']);
  });

  it('accepts HEAD', () => {
    expect(call('HEAD').status).toBe(200);
  });

  it('rejects other methods with 405 and an Allow header', () => {
    for (const method of ['POST', 'PUT', 'DELETE', 'PATCH']) {
      const { status, headers } = call(method);

      expect(status).toBe(405);
      expect(headers.allow).toBe('GET, HEAD');
    }
  });
});

describe('config/app-config.json', () => {
  it('has the iOS versions as MAJOR.MINOR.PATCH strings', () => {
    const { minimumVersion, latestVersion } = appConfig.ios;

    expect(typeof minimumVersion).toBe('string');
    expect(typeof latestVersion).toBe('string');
    expect(minimumVersion).toMatch(SEMVER);
    expect(latestVersion).toMatch(SEMVER);
  });

  it('has a minimum version that is not newer than the latest version', () => {
    const parse = (v: string) => v.split('.').map(Number);
    const [min, latest] = [
      parse(appConfig.ios.minimumVersion),
      parse(appConfig.ios.latestVersion),
    ];
    const diff = min.map((n, i) => n - latest[i]).find((d) => d !== 0) ?? 0;

    expect(diff).toBeLessThanOrEqual(0);
  });
});
