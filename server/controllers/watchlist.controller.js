const WatchlistService = require("../services/watchlist.service");

class WatchlistController {
  // ************************************************************
  // * FIND ALL WATCHLISTS
  static async findAllWatchlists(request, response) {
    let page = request.query.page ? request.query.page : 0;
    let watchlists, message;

    try {
      watchlists = await WatchlistService.findAllWatchlists(page);
    } catch (err) {
      return response.status(500).json(err);
    }

    message = "Successfully retrieved watchlists!";
    return response.status(202).json({ message, watchlists });
  }

  // ************************************************************
  // * FIND ALL WATCHLISTS FOR A SPECIFIC USER
  static async findAllWatchlistsByAuthorId(request, response) {
    let page = request.query.page ? request.query.page : 0;
    let authorId = request.query.id;

    let watchlists, message;

    try {
      watchlists = await WatchlistService.findAllWatchlistsByAuthorId(
        authorId,
        page
      );
    } catch (err) {
      return response.status(500).json(err);
    }

    message = "Successfully retrieved watchlists!";
    return response.status(202).json({ message, watchlists });
  }

  // ************************************************************
  // * FIND ALL WATCHLISTS BY NAME
  static async findWatchlistsByName(request, response) {
    let page = request.query.page ? request.query.page : 0;
    let title = request.query.title;

    let watchlists, message;

    try {
      watchlists = await WatchlistService.findWatchlistsByName(title, page);
    } catch (err) {
      return response.status(500).json(err);
    }

    message = "Successfully retrieved watchlists!";
    return response.status(202).json({ message, watchlists });
  }

  // ************************************************************
  // * ADD MOVIE TO WATCHLIST
  static async addMovieToWatchlist(request, response) {
    let { watchlistId, movieId, movieTitle, moviePosterPath } = request.body;
    let watchlist, message;

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

    message = "Successfully added " + movieTitle + " to watchlist!";
    return response.status(202).json({ message, watchlist });
  }

  // ************************************************************
  // * CREATE NEW WATCHLIST
  static async createWatchlist(request, response) {
    let title = request.body.title;
    let description = request.body.description;
    let authorId = request.body.authorId;

    let watchlistResponse, message;

    try {
      watchlistResponse = await WatchlistService.createWatchlist(
        title,
        description,
        authorId
      );
    } catch (err) {
      console.log(err);
      return response.status(500).json(err);
    }

    message = "Successfully added watchlist!";
    return response.status(201).json({ message, watchlistResponse });
  }

  // ************************************************************
  // * LIKE WATCHLIST
  static async likeWatchlist(request, response) {
    let watchlistId = request.body.watchlistId;

    let watchlistResponse, message;

    try {
      watchlistResponse = await WatchlistService.likeWatchlist(watchlistId);
    } catch (err) {
      console.log(err);
      return response.status(500).json(err);
    }

    message = "Successfully liked watchlist!";
    return response.status(201).json({ message, watchlistResponse });
  }

  // ************************************************************
  // * UPDATE TITLE OR DESCRIPTION
  static async updateTitleOrDescription(request, response) {
    let watchlistId = request.body.watchlistId;
    let title = request.body.title;
    let description = request.body.description;

    let watchlistResponse, message;

    try {
      watchlistResponse = await WatchlistService.updateTitleOrDescription(
        watchlistId,
        title,
        description
      );
    } catch (err) {
      return response.status(500).json(err);
    }

    message = "Successfully updated watchlist!";
    return response.status(202).json({ message, watchlistResponse });
  }

  // ************************************************************
  // * DELETE WATCHLIST
  static async deleteWatchlist(request, response) {
    let watchlistId = request.query.watchlistId;

    let message = "Successfully deleted watchlist!";

    try {
      await WatchlistService.deleteWatchlist(watchlistId);
    } catch (err) {
      return response.status(500).json(err);
    }

    return response.status(200).json({ message });
  }

  // ************************************************************
  // * DELETE MOVIE FROM WATCHLIST
  static async deleteMovieFromWatchlist(request, response) {
    let watchlistId = request.query.watchlistId;
    let movieId = request.query.movieId;

    let message, watchlist;

    try {
      watchlist = await WatchlistService.deleteMovieFromWatchlist(
        watchlistId,
        movieId
      );
    } catch (err) {
      return response.status(500).json(err);
    }

    message = "Successfully deleted movie from watchlist!";
    return response.status(200).json({ message, watchlist });
  }

      // ************************************************************
  // * SORT BY TITLE
  static async sortWatchlistsByTitle(request, response) {
    let sort = request.query.sort;
    let watchlists, message;

    try {
      watchlists = await WatchlistService.sortWatchlistsByTitle(sort);
    } catch (err) {
      return response.status(500).json(err);
    }
    
    message = "Successfully sorted watchlists!";
    return response.status(202).json({ message, watchlists });
  }

    // ************************************************************
    // * SORT BY TITLE AND AUTHOR
    static async sortWatchlistsByTitleAndAuthor(request, response) {
      let sort = request.query.sort;
  
      let watchlists, message;
  
      try {
        watchlists = await WatchlistService.sortWatchlistsByTitleAndAuthor(sort);
      } catch (err) {
        return response.status(500).json(err);
      }

      message = "Successfully sorted watchlists!";
      return response.status(202).json({ message, watchlists });
    }
}

module.exports = WatchlistController;
