import type { NextApiRequest, NextApiResponse } from 'next';
import { NOT_CONFIGURED_MESSAGE, sessionCookie } from '@lib/studio/auth';
import {
  getStudioConfig,
  signSession,
  verifyPassword,
} from '@lib/studio/session';

const FAILURE_DELAY_MS = 1000;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');

    return res.status(405).json({ error: 'Method not allowed' });
  }

  const config = getStudioConfig();

  if (!config) {
    return res.status(503).json({ error: NOT_CONFIGURED_MESSAGE });
  }

  const password = req.body?.password;

  if (!(await verifyPassword(password, config.passwordHash))) {
    // Slows guessing down; the real defence is a long password.
    await wait(FAILURE_DELAY_MS);

    return res.status(401).json({ error: 'Wrong password' });
  }

  res.setHeader(
    'Set-Cookie',
    sessionCookie(signSession(config.secret, config.version)),
  );

  return res.status(200).json({ ok: true });
}
