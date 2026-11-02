import type { NextApiRequest, NextApiResponse } from 'next';
import { clearedSessionCookie } from '@lib/studio/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');

    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.setHeader('Set-Cookie', clearedSessionCookie());

  return res.status(200).json({ ok: true });
}
