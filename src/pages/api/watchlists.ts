// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@lib/mongo';
import Watchlist from '@lib/models/watchlist';

type Data = {
  status: number;
  data: Array<unknown>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await dbConnect();

  if (req.method === 'GET') {
    const allWatchlists = await Watchlist.find()
      .limit(20)
      .populate('author_id', 'username')
      .exec();
    console.log('API', allWatchlists);
    return res.json({ status: 200, data: allWatchlists });
  }
}
