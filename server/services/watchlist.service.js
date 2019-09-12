const mongoose = require("mongoose");
const Watchlist = mongoose.model("Watchlist");
const ObjectId = mongoose.Types.ObjectId;

class WatchlistService {
  // ************************************************************
  // * FIND ALL WATCHLISTS
  static async findAllWatchlists(page = 0) {
    return await Watchlist.find()
      .skip(20 * page)
      .limit(20)
      .populate("author_id", "username")
      .exec();
  }

  // ************************************************************
  // * FIND ALL WATCHLISTS FOR A SPECIFIC USER
  static async findAllWatchlistsByAuthorId(authorId, page = 0) {
    let author_id = ObjectId(authorId.toString());
    return await Watchlist.find({ author_id: author_id })
      .skip(20 * page)
      .limit(20)
      .populate("author_id", "username")
      .exec();
  }

  // ************************************************************
  // * FIND ALL WATCHLISTS BY NAME
  static async findWatchlistsByName(title, page = 0) {
    return await Watchlist.find({ title: { $regex: title, $options: "i" } })
      .skip(20 * page)
      .limit(20)
      .populate("author_id", "username")
      .exec();
  }

  // ************************************************************
  // * ADD MOVIE TO WATCHLIST
  static async addMovieToWatchlist(
    watchlistId,
    movieId,
    movieTitle,
    moviePosterPath
  ) {
    let watchlist_id = ObjectId(watchlistId.toString());
    return await Watchlist.findByIdAndUpdate(
      { _id: watchlist_id },
      { $push: { movies: { movieId, movieTitle, moviePosterPath } } },
      { new: true, upsert: true }
    ).exec();
  }

  // ************************************************************
  // * CREATE NEW WATCHLIST
  static async createWatchlist(title, description, authorId) {
    let author_id = ObjectId(authorId.toString());
    let watchlist = new Watchlist({ title, description, author_id });

    await watchlist.save();
    return watchlist;
  }

  // ************************************************************
  // * LIKE WATCHLIST
  static async likeWatchlist(watchId) {
    let _id = ObjectId(watchId.toString());

    let watchlist = await Watchlist.findByIdAndUpdate(
      { _id },
      { $inc: { likes: 1 } },
      { new: true, fields: "likes" }
    ).exec();

    await watchlist.save();
    return watchlist;
  }

  // ************************************************************
  // * UPDATE TITLE OR DESCRIPTION
  static async updateTitleOrDescription(_id, title, description) {
    let _id = ObjectId(_id.toString());

    let watchlist = await Watchlist.findByIdAndUpdate(
      { _id },
      { title, description },
      { new: true, upsert: true }
    ).exec();

    await watchlist.save();
    return watchlist;
  }

  // ************************************************************
  // * DELETE WATCHLIST
  static async deleteWatchlist(watchid) {
    let _id = ObjectId(watchid.toString());

    await Watchlist.findByIdAndDelete({ _id }, function(err) {
      if (err) return err;
      return "Succesfully deleted watchlist!";
    }).exec();
  }

  // ************************************************************
  // * DELETE A SINGLE MOVIE FROM WATCHLIST
  static async deleteMovieFromWatchlist(watchlistId, movieId) {
    let _id = ObjectId(watchlistId.toString());
    let _movieId = ObjectId(movieId.toString());

    await Watchlist.findByIdAndUpdate(
      { _id },
      { $pull: { movies: { _id: _movieId } } },
      { new: true },
      function(err, watchlist) {
        if (err) return err;
        else return watchlist;
      }
    );
  }
}

module.exports = WatchlistService;
