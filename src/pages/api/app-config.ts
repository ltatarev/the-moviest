// Public config for the Moviest iOS app: the oldest build that can still run
// and the newest build in the App Store. The JSON is bundled at build time.
import type { NextApiRequest, NextApiResponse } from 'next';
import appConfig from '../../../config/app-config.json';

export type AppConfig = typeof appConfig;

export const CACHE_CONTROL =
  'public, max-age=0, s-maxage=300, stale-while-revalidate=86400';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AppConfig | { error: string }>,
) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', CACHE_CONTROL);
  return res.status(200).json(appConfig);
}
