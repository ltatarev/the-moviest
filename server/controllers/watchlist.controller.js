const WatchlistService = require('../services/watchlist.service');

class WatchlistController {
    // * CREATE NEW
    static async createWatchlist(request, response) {
        let title = request.body.title;
        let description = request.body.description;
        let movies = request.body.movies;
        let authorId = request.body.authorId;

        let watchlistResponse, message;

        try {
            watchlistResponse = await WatchlistService.createWatchlist(title, description, movies, authorId);
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }

        message = "Successfully added watchlist!";
        return response.status(201).json({ message, watchlistResponse });
    }

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