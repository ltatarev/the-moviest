// The regional Discover sections for one region: In cinemas and Streaming
// now. Discover calls it when the viewer's region is not the default one.
import type { NextApiRequest, NextApiResponse } from 'next';
import { SLOW_PAGE_CACHE } from '@lib/cache';
import { fetchRegionalData, type RegionalData } from '@lib/regional';
import { isWatchRegion } from '@lib/watch';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegionalData | { error: string }>,
) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');

    return res.status(405).json({ error: 'Method not allowed' });
  }

  const region = String(req.query.region ?? '').toUpperCase();

  if (!isWatchRegion(region)) {
    return res.status(400).json({ error: 'Unknown region' });
  }

  const service = Number(req.query.service);
  const data = await fetchRegionalData(
    region,
    Number.isInteger(service) && service > 0 ? service : undefined,
  );

  // One CDN copy per region and service: both are in the URL.
  res.setHeader('Cache-Control', SLOW_PAGE_CACHE);

  return res.status(200).json(data);
}
