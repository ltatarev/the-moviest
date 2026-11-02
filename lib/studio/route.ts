import type { NextApiRequest, NextApiResponse } from 'next';
import { requireStudioSession } from './auth';
import { TmdbError } from './tmdb';

export class BadRequest extends Error {}

/**
 * Wraps a studio GET route: session check, method check, JSON response with a
 * short private cache, and TMDB failures turned into clean status codes.
 */
export function studioGet(
  run: (query: NextApiRequest['query']) => Promise<unknown>,
) {
  return async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!requireStudioSession(req, res)) {
      return;
    }

    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');

      return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
      const data = await run(req.query);
      res.setHeader('Cache-Control', 'private, max-age=3600');

      return res.status(200).json(data);
    } catch (error) {
      if (error instanceof BadRequest) {
        return res.status(400).json({ error: error.message });
      }

      if (error instanceof TmdbError) {
        const status = error.status === 404 ? 404 : 502;

        return res
          .status(status)
          .json({ error: `TMDB answered ${error.status}` });
      }

      console.error('Studio route failed', error);

      return res.status(500).json({ error: 'Something went wrong' });
    }
  };
}

export function stringParam(value: unknown): string | undefined {
  return typeof value === 'string' ? value : undefined;
}

export function idParam(value: unknown): number {
  const id = Number(stringParam(value));

  if (!Number.isInteger(id) || id <= 0) {
    throw new BadRequest('Invalid id');
  }

  return id;
}
