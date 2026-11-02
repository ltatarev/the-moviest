import type { NextApiRequest, NextApiResponse } from 'next';
import {
  getStudioConfig,
  SESSION_MAX_AGE_SECONDS,
  STUDIO_COOKIE,
  verifySession,
} from './session';

export const NOT_CONFIGURED_MESSAGE =
  'Studio not configured. Set STUDIO_PASSWORD_HASH and STUDIO_SESSION_SECRET.';

/**
 * Second line of defence behind `src/proxy.ts`: every studio API route calls
 * this first, so a matcher mistake can never expose one. Returns false after
 * it has already sent the error response.
 */
export function requireStudioSession(
  req: NextApiRequest,
  res: NextApiResponse,
): boolean {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');

  const config = getStudioConfig();

  if (!config) {
    res.status(503).json({ error: NOT_CONFIGURED_MESSAGE });

    return false;
  }

  if (
    !verifySession(req.cookies[STUDIO_COOKIE], config.secret, config.version)
  ) {
    res.status(401).json({ error: 'Not signed in' });

    return false;
  }

  return true;
}

function cookieAttributes(maxAge: number): string {
  const parts = ['Path=/', 'HttpOnly', 'SameSite=Strict', `Max-Age=${maxAge}`];

  // Safari refuses Secure cookies on http://localhost, so only in production.
  if (process.env.NODE_ENV === 'production') {
    parts.push('Secure');
  }

  return parts.join('; ');
}

export function sessionCookie(token: string): string {
  return `${STUDIO_COOKIE}=${token}; ${cookieAttributes(SESSION_MAX_AGE_SECONDS)}`;
}

export function clearedSessionCookie(): string {
  return `${STUDIO_COOKIE}=; ${cookieAttributes(0)}`;
}
