const WatchlistService = require('../services/watchlist.service');

class WatchlistController {
    // * CREATE NEW
    static async createWatchlist(request, response) {
        let title = request.body.title;
        let description = request.body.description;
        let movies = request.body.movies;
        let authodId = request.body.authorId;

        let watchlist, message;

        try {
            watchlist = await WatchlistService.createWatchlist(title, description, movies, authorId);
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }

        message = "Successfully added watchlist!";
        return response.status(202).json({ message, watchlist });
    }

    // * UPDATE TITLE OR DESCRIPTION
    static async updateTitleOrDescription(request, response) {
        let watchlistId = request.body.watchlistId;
        let title = request.body.title;
        let description = request.body.description;

        let watchlist, message;

        try {
            watchlist = await WatchlistService.updateTitleOrDescription(watchlistId, title, description);
        } catch (err) {
            return response.status(500).json(err);
        }

        message = "Successfully updated watchlist!";
        return response.status(202).json({ message, watchlist });
    }

    // * LIKE
    static async likeWatchlist(request, response) {
        let watchlistId = request.body.watchlistId;

        let watchlist, message;

        try {
            watchlist = await WatchlistService.likeWatchlist(watchlistId);
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }

        message = "Successfully liked watchlist!";
        return response.status(201).json({ message, watchlist });
    }

    // * DELETE
    static async deleteWatchlist(request, response) {
        let watchlistId = request.body.watchlistId;

        let watchlist, message;

        try {
            await WatchlistService.deleteWatchlist(watchlistId);
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }

        message = "Successfully deleted watchlist!";
        return response.status(201).json({ message, watchlist });
    }

    // * DELETE MOVIE FROM WATCHLIST
    static async deleteMovieFromWatchlist(request, response) {
        let watchlistId = request.body.watchlistId;
        let movieId = request.body.movieId;

        let watchlist, message;

        try {
            await WatchlistService.deleteMovieFromWatchlist(watchlistId, movieId);
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }

        message = "Successfully deleted watchlist!";
        return response.status(201).json({ message, watchlist });
    }

}

module.exports = WatchlistController;