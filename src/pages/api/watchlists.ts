// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@lib/mongo';
import Watchlist from '@lib/models/watchlist';
import mongoose from 'mongoose';

import { DEFAULT_PER_PAGE, formatWatchlistQuery } from '@lib/queryService';

const ObjectId = mongoose.Types.ObjectId;

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

    const allWatchlists = await Watchlist.find(query)
      .skip(page * DEFAULT_PER_PAGE)
      .limit(DEFAULT_PER_PAGE)
      .sort(sort)
      .populate('author_id', 'username')
      .exec();

    return res.json({ status: 200, data: allWatchlists });
  }

  if (req.method === 'POST') {
    // Create new watchlist
    const author_id = new ObjectId(req.body.authorId.toString());

    const watchlist = new Watchlist({
      title: req.body.title,
      description: req.body.description,
      author_id,
    });

    await watchlist.save();

    return watchlist;
  }

  if (req.method === 'PATCH') {
    const watchlistId = new ObjectId(req.body.watchlistId.toString());

    if (req.body.title || req.body.description) {
      // Update title or description
      const watchlist = await Watchlist.findByIdAndUpdate(
        { _id: watchlistId },
        { title: req.body.title, description: req.body.description },
        { new: true, upsert: true }
      ).exec();

      await watchlist.save();

      return watchlist;
    }

    if (req.body.movieId) {
      // Add movie to watchlist
      return await Watchlist.findByIdAndUpdate(
        { _id: watchlistId },
        {
          $push: {
            movies: {
              movieId: req.body.movieId,
              movieTitle: req.body.movieTitle,
              moviePosterPath: req.body.moviePosterPath,
            },
          },
        },
        { new: true, upsert: true }
      ).exec();
    }

    // Like watchlist
    const watchlist = await Watchlist.findByIdAndUpdate(
      { _id: watchlistId },
      { $inc: { likes: 1 } },
      { new: true, fields: 'likes' }
    ).exec();

    await watchlist.save();
    return watchlist;
  }

  if (req.method === 'DELETE') {
    // Delete movie from watchlist
    if (req.body.movieId) {
      const watchlistId = new ObjectId(req.body.watchlistId.toString());
      const movieId = new ObjectId(req.body.movieId.toString());

      return await Watchlist.findByIdAndUpdate(
        { _id: watchlistId },
        { $pull: { movies: { _id: movieId } } },
        { new: true },
        function (err, watchlist) {
          if (err) {
            return err;
          } else {
            return watchlist;
          }
        }
      );
    }

    // Delete watchlist
    const watchlistId = new ObjectId(req.body.watchlistId.toString());

    return await Watchlist.findByIdAndDelete(
      { _id: watchlistId },
      function (err: mongoose.CallbackError) {
        if (err) {
          return err;
        }
        return 'Succesfully deleted watchlist!';
      }
    ).exec();
  }
}
