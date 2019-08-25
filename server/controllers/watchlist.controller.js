const WatchlistService = require('../services/watchlist.service');

class WatchlistController {
    // ************************************************************
    // * CREATE NEW
    static async createWatchlist(request, response) {
        let title = request.body.title;
        let description = request.body.description;
        let authorId = request.body.authorId;

        let watchlistResponse, message;

        try {
            watchlistResponse = await WatchlistService.createWatchlist(title, description, authorId);
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }

        message = "Successfully added watchlist!";
        return response.status(201).json({ message, watchlistResponse });
    }

    // ************************************************************
    // * ADD MOVIE TO WATCHLIST
    static async addMovieToWatchlist(request, response) {
        let { watchlistId, movieId, movieTitle, moviePosterPath } = request.body;
        let watchlist, message;

        try {
            watchlist = await WatchlistService.addMovieToWatchlist(watchlistId, movieId, movieTitle, moviePosterPath);
        } catch (err) {
            return response.status(500).json(err);
        }

        message = "Successfully retrieved watchlists!";
        return response.status(202).json({ message, watchlist });
    }


    // ************************************************************
    // * FIND ALL WATCHLISTS
    static async findAllWatchlists(request, response) {
        let watchlists, message;

        try {
            watchlists = await WatchlistService.findAllWatchlists();
        } catch (err) {
            return response.status(500).json(err);
        }

        message = "Successfully retrieved watchlists!";
        return response.status(202).json({ message, watchlists });

    }

    // ************************************************************
    // * GET ALL WATCHLISTS FOR A SPECIFIC USER
    static async findAllWatchlistsByAuthorId(request, response) {
        let authorId = request.body.authorId;

        let watchlists, message;

        try {
            watchlists = await WatchlistService.findAllWatchlists(authorId);
        } catch (err) {
            return response.status(500).json(err);
        }

        message = "Successfully retrieved watchlists!";
        return response.status(202).json({ message, watchlists });

    }

    // ************************************************************
    // * GET ALL WATCHLISTS BY NAME
    static async findWatchlistsByName(request, response) {
        let title = request.body.title;

        let watchlists, message;

        try {
            watchlists = await WatchlistService.findWatchlistsByName(title);
        } catch (err) {
            return response.status(500).json(err);
        }

        message = "Successfully retrieved watchlists!";
        return response.status(202).json({ message, watchlists });

    }

    // ************************************************************
    // * UPDATE TITLE OR DESCRIPTION
    static async updateTitleOrDescription(request, response) {
        let watchlistId = request.body.watchlistId;
        let title = request.body.title;
        let description = request.body.description;

        let watchlistResponse, message;

        try {
            watchlistResponse = await WatchlistService.updateTitleOrDescription(watchlistId, title, description);
        } catch (err) {
            return response.status(500).json(err);
        }

        message = "Successfully updated watchlist!";
        return response.status(202).json({ message, watchlistResponse });
    }

    // ************************************************************
    // * LIKE
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
    // * DELETE
    static async deleteWatchlist(request, response) {
        let watchlistId = request.body.watchlistId;

        let message;

        try {
            message = await WatchlistService.deleteWatchlist(watchlistId);
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }

        return response.status(200).json({ message });
    }

    // ************************************************************
    // * DELETE MOVIE FROM WATCHLIST
    static async deleteMovieFromWatchlist(request, response) {
        let watchlistId = request.body.watchlistId;
        let movieId = request.body.movieId;

        let message;

        try {
            message = await WatchlistService.deleteMovieFromWatchlist(watchlistId, movieId);
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }

        return response.status(200).json({ message });
    }

}

module.exports = WatchlistController;