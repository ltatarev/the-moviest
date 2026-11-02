import type { NextApiRequest, NextApiResponse } from 'next';
import { requireStudioSession } from '@lib/studio/auth';
import { isTmdbImagePath } from '@lib/studio/imagePath';
import { IMAGE_BASE_URL } from '@lib/tmdb';

/**
 * Same-origin copy of a TMDB image, so the PNG export never trips over
 * cross-origin canvas rules. Only TMDB image paths are accepted.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!requireStudioSession(req, res)) {
    return;
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');

    return res.status(405).json({ error: 'Method not allowed' });
  }

  const path = req.query.p;

  if (!isTmdbImagePath(path)) {
    return res.status(400).json({ error: 'Not a TMDB image path' });
  }

  const upstream = await fetch(`${IMAGE_BASE_URL}${path}`, {
    redirect: 'error',
  }).catch(() => null);

  if (!upstream?.ok) {
    return res.status(upstream?.status === 404 ? 404 : 502).end();
  }

  const contentType = upstream.headers.get('content-type') ?? '';

  if (!contentType.startsWith('image/')) {
    return res.status(502).end();
  }

  res.setHeader('Content-Type', contentType);
  res.setHeader('Cache-Control', 'private, max-age=604800, immutable');

  return res.status(200).send(Buffer.from(await upstream.arrayBuffer()));
}
