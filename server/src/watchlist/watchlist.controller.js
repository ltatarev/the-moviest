const _ = require("lodash");
const WatchlistService = require("./watchlist.service");

class WatchlistController {
  /**
   * FIND ALL WATCHLISTS:
   * Returns all watchlists
   * @param  {number} page Current page
   * @return {object} Watchlists
   */
  static async findAllWatchlists(request, response) {
    const page = _.get(request, "query.page", 0);

    let watchlists;

    try {
      watchlists = await WatchlistService.findAllWatchlists(page);
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully retrieved watchlists!";
    return response.status(202).json({ message, watchlists });
  }

  /**
   * FIND ALL WATCHLISTS BY USER:
   * Returns all watchlists made by an user
   * @param  {string} authorId User ID
   * @param  {number} page Current page
   * @return {object} Watchlists made by user
   */
  static async findAllWatchlistsByAuthorId(request, response) {
    const page = _.get(request, "query.page", 0);
    const { id: authorId } = request.query;

    let watchlists;

    try {
      watchlists = await WatchlistService.findAllWatchlistsByAuthorId(
        authorId,
        page
      );
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully retrieved watchlists!";
    return response.status(202).json({ message, watchlists });
  }

  /**
   * FIND ALL WATCHLISTS BY NAME:
   * Returns all watchlists that
   * @param  {string} title Title that is being searched
   * @param  {number} page Current page
   * @return {object} Watchlists that match title
   */
  static async findWatchlistsByName(request, response) {
    const page = _.get(request, "query.page", 0);
    const { title } = request.query;

    let watchlists;

    try {
      watchlists = await WatchlistService.findWatchlistsByName(title, page);
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully retrieved watchlists!";
    return response.status(202).json({ message, watchlists });
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
  static async addMovieToWatchlist(request, response) {
    let { watchlistId, movieId, movieTitle, moviePosterPath } = request.body;

    let watchlist;

    try {
      watchlist = await WatchlistService.addMovieToWatchlist(
        watchlistId,
        movieId,
        movieTitle,
        moviePosterPath
      );
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully added " + movieTitle + " to watchlist!";
    return response.status(202).json({ message, watchlist });
  }

  /**
   * CREATE NEW WATCHLIST:
   * Creates a new watchlist
   * @param  {string} title Watchlist title
   * @param  {string} description Watchlist short description
   * @param  {string} authorId Author ID
   * @return {object} Watchlist
   */
  static async createWatchlist(request, response) {
    const { title, description, authorId } = request.body;

    let watchlist;

    try {
      watchlist = await WatchlistService.createWatchlist(
        title,
        description,
        authorId
      );
    } catch (err) {
      console.log(err);
      return response.status(500).json(err);
    }

    const message = "Successfully added watchlist!";
    return response.status(201).json({ message, watchlist });
  }

  /**
   * LIKE WATCHLIST:
   * Likes a watchlist
   * @param  {string} watchlistId Watchlist title
   * @return {object} Updated watchlist
   */
  static async likeWatchlist(request, response) {
    const { watchlistId } = request.body;

    let watchlist;

    try {
      watchlist = await WatchlistService.likeWatchlist(watchlistId);
    } catch (err) {
      console.log(err);
      return response.status(500).json(err);
    }

    const message = "Successfully liked watchlist!";
    return response.status(201).json({ message, watchlist });
  }

  /**
   * UPDATE TITLE OR DESCRIPTION:
   * Updates title and/or description of a watchlist
   * @param  {string} watchlistId Watchlist ID
   * @param  {string} title Watchlist title
   * @param  {string} description Watchlist description
   * @return {object} Updated watchlist
   */
  static async updateTitleOrDescription(request, response) {
    const { watchlistId, title, description } = request.body;

    let watchlist;

    try {
      watchlist = await WatchlistService.updateTitleOrDescription(
        watchlistId,
        title,
        description
      );
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully updated watchlist!";
    return response.status(202).json({ message, watchlist });
  }

  /**
   * DELETE WATCHLIST:
   * Deletes a watchlist
   * @param  {string} watchlistId Watchlist ID
   * @return {object} Response
   */
  static async deleteWatchlist(request, response) {
    const { watchlistId } = request.query;

    const message = "Successfully deleted watchlist!";

    try {
      await WatchlistService.deleteWatchlist(watchlistId);
    } catch (err) {
      return response.status(500).json(err);
    }

    return response.status(200).json({ message });
  }

  /**
   * DELETE MOVIE FROM WATCHLIST:
   * Deletes a movie from watchlist
   * @param  {string} watchlistId Watchlist ID
   * @param  {string} movieId Movie ID
   * @return {object} Response
   */
  static async deleteMovieFromWatchlist(request, response) {
    const { watchlistId, movieId } = request.query;

    let watchlist;

    try {
      watchlist = await WatchlistService.deleteMovieFromWatchlist(
        watchlistId,
        movieId
      );
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully deleted movie from watchlist!";
    return response.status(200).json({ message, watchlist });
  }

  /**
   * SORT BY TITLE:
   * Sorts all watchlists based on title
   * @param  {string} sort Sort
   * @return {object} Response
   */
  static async sortWatchlistsByTitle(request, response) {
    const { sort } = request.query;

    let watchlists;

    try {
      watchlists = await WatchlistService.sortWatchlistsByTitle(sort);
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully sorted watchlists!";
    return response.status(202).json({ message, watchlists });
  }

  /**
   * SORT BY TITLE & AUTHOR:
   * Sorts all watchlists from an user based on title
   * @param  {string} sort Sort
   * @return {object} Response
   */
  static async sortWatchlistsByTitleAndAuthor(request, response) {
    const { sort } = request.query;

    let watchlists;

    try {
      watchlists = await WatchlistService.sortWatchlistsByTitleAndAuthor(sort);
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully sorted watchlists!";
    return response.status(202).json({ message, watchlists });
  }
}

module.exports = WatchlistController;
