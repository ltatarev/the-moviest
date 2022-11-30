// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import mongoClientPromise from '@lib/mongo';

type Data = {
  status: number;
  data: Array<unknown>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = await mongoClientPromise;
  const db = client.db(process.env.DB_NAME);

  if (req.method === 'GET') {
    const allWatchlists = await db.collection('Watchlist').find({}).toArray();

    return res.json({ status: 200, data: allWatchlists });
  }
}
