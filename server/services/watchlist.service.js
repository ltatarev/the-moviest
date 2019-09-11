const mongoose = require("mongoose");
const Watchlist = mongoose.model("Watchlist");
const ObjectId = mongoose.Types.ObjectId;

class WatchlistService {
  // ************************************************************
  // * FIND ALL WATCHLISTS
  static async findAllWatchlists() {
    return await Watchlist.find()
      .populate("author_id", "username")
      .exec();
  }

  // ************************************************************
  // * FIND ALL WATCHLISTS FOR A SPECIFIC USER
  static async findAllWatchlistsByAuthorId(authorId) {
    let author_id = ObjectId(authorId.toString());
    return await Watchlist.find({ author_id: author_id })
      .populate("author_id", "username")
      .exec();
  }

  // ************************************************************
  // * FIND ALL WATCHLISTS BY NAME
  static async findWatchlistsByName(title) {
    return await Watchlist.find({ title: { $regex: title, $options: "i" } })
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
  static async likeWatchlist(_id) {
    let _id = ObjectId(_id.toString());

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
  static async deleteWatchlist(_id) {
    let _id = ObjectId(_id.toString());

    await Watchlist.findByIdAndDelete({ _id }, function(err) {
      if (err) return err;
      return "Succesfully deleted watchlist!";
    }).exec();
  }

  // ************************************************************
  // * DELETE A SINGLE MOVIE FROM WATCHLIST
  static async deleteMovieFromWatchlist(_id, movieId) {
    let _id = ObjectId(_id.toString());

    await Watchlist.findOneAndUpdate(
      { _id },
      { $pull: { movies: { movieId } } },
      { new: true },
      function(err) {
        if (err) {
          return err;
        }
        return "Succesfully deleted movie from watchlist!";
      }
    ).exec();
  }
}

module.exports = WatchlistService;
