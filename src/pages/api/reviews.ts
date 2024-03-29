// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@lib/mongo';
import Watchlist from '@lib/models/review';

import { DEFAULT_PER_PAGE, formatWatchlistQuery } from '@lib/queryService';

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
    const { query, page, sort } = formatWatchlistQuery(req.query);

    if (query.id) {
      const review = await Watchlist.findById({ _id: query.id })
        .populate('author_id', 'username')
        .exec();

      return res.json({ status: 200, data: review });
    }

    const allReviews = await Watchlist.find(query)
      .skip(page * DEFAULT_PER_PAGE)
      .limit(DEFAULT_PER_PAGE)
      .sort(sort)
      .populate('author_id', 'username')
      .exec();

    return res.json({ status: 200, data: allReviews });
  }
}
