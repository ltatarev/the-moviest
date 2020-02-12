const mongoose = require("mongoose");
const Watchlist = mongoose.model("Watchlist");
const ObjectId = mongoose.Types.ObjectId;

class WatchlistService {
  /**
   * FIND ALL WATCHLISTS:
   * Returns all watchlists
   * @param  {number} page Current page
   * @return {object} Watchlists
   */
  static async findAllWatchlists(page = 0) {
    return await Watchlist.find()
      .skip(20 * page)
      .limit(20)
      .populate("author_id", "username")
      .exec();
  }

  /**
   * FIND ALL WATCHLISTS BY USER:
   * Returns all watchlists made by an user
   * @param  {string} authorId User ID
   * @param  {number} page Current page
   * @return {object} Watchlists
   */
  static async findAllWatchlistsByAuthorId(authorId, page = 0) {
    const author_id = ObjectId(authorId.toString());
    return await Watchlist.find({ author_id: author_id })
      .skip(20 * page)
      .limit(20)
      .populate("author_id", "username")
      .exec();
  }

  /**
   * FIND ALL WATCHLISTS BY NAME:
   * Returns all watchlists that
   * @param  {string} title Title that is being searched
   * @param  {number} page Current page
   * @return {object} Watchlists that match title
   */
  static async findWatchlistsByName(title, page = 0) {
    return await Watchlist.find({ title: { $regex: title, $options: "i" } })
      .skip(20 * page)
      .limit(20)
      .populate("author_id", "username")
      .exec();
  }

  /**
   * ADD MOVIE TO WATCHLIST:
   * Adds a movie to a premade watchlist
   * @param  {string} watchlistId Watchlist ID
   * @param  {string} movieId MovieID on tmdb
   * @param  {string} movieTitle Movie tilte
   * @param  {string} moviePosterPath URL containing movie poster image
   * @return {object} Updated watchlist
   */
  static async addMovieToWatchlist(
    watchlistId,
    movieId,
    movieTitle,
    moviePosterPath
  ) {
    const watchlist_id = ObjectId(watchlistId.toString());
    return await Watchlist.findByIdAndUpdate(
      { _id: watchlist_id },
      { $push: { movies: { movieId, movieTitle, moviePosterPath } } },
      { new: true, upsert: true }
    ).exec();
  }

  /**
   * CREATE NEW WATCHLIST:
   * Creates a new watchlist
   * @param  {string} title Watchlist title
   * @param  {string} description Watchlist short description
   * @param  {string} authorId Author ID
   * @return {object} Watchlist
   */
  static async createWatchlist(title, description, authorId) {
    const author_id = ObjectId(authorId.toString());
    const watchlist = new Watchlist({ title, description, author_id });

    await watchlist.save();
    return watchlist;
  }

  /**
   * LIKE WATCHLIST:
   * Likes a watchlist
   * @param  {string} watchlistId Watchlist title
   * @return {object} Updated watchlist
   */
  static async likeWatchlist(watchId) {
    const _id = ObjectId(watchId.toString());

    const watchlist = await Watchlist.findByIdAndUpdate(
      { _id },
      { $inc: { likes: 1 } },
      { new: true, fields: "likes" }
    ).exec();

    await watchlist.save();
    return watchlist;
  }

  /**
   * UPDATE TITLE OR DESCRIPTION:
   * Updates title and/or description of a watchlist
   * @param  {string} watchlistId Watchlist ID
   * @param  {string} title Watchlist title
   * @param  {string} description Watchlist description
   * @return {object} Updated watchlist
   */
  static async updateTitleOrDescription(_id, title, description) {
    const _id = ObjectId(_id.toString());

    const watchlist = await Watchlist.findByIdAndUpdate(
      { _id },
      { title, description },
      { new: true, upsert: true }
    ).exec();

    await watchlist.save();
    return watchlist;
  }

  /**
   * DELETE WATCHLIST:
   * Deletes a watchlist
   * @param  {string} watchlistId Watchlist ID
   * @return {object} Response
   */
  static async deleteWatchlist(watchid) {
    let _id = ObjectId(watchid.toString());

    await Watchlist.findByIdAndDelete({ _id }, function(err) {
      if (err) return err;
      return "Succesfully deleted watchlist!";
    }).exec();
  }

  /**
   * DELETE MOVIE FROM WATCHLIST:
   * Deletes a movie from watchlist
   * @param  {string} watchlistId Watchlist ID
   * @param  {string} movieId Movie ID
   * @return {object} Response
   */
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

  /**
   * SORT BY TITLE:
   * Sorts all watchlists based on title
   * @param  {string} sort Sort
   * @return {object} Response
   */
  static async sortWatchlistsByTitle(sort) {
    return await Watchlist.find({})
      .sort({ title: sort })
      .populate("author_id", "username")
      .exec();
  }

  /**
   * SORT BY TITLE & AUTHOR:
   * Sorts all watchlists from an user based on title
   * @param  {string} sort Sort
   * @return {object} Response
   */
  static async sortWatchlistsByTitleAndAuthor(authorId, sort) {
    const author_id = ObjectId(authorId.toString());
    return await Watchlist.findById({ author_id })
      .sort({ title: sort })
      .populate("author_id", "username")
      .exec();
  }
}

module.exports = WatchlistService;
