const express = require('express');
let router = express.Router();

const WatchlistController = require('../controllers/watchlist.controller');

router.route("/createWatchlist")
    .post(WatchlistController.createWatchlist);

router.route("/updateWatchlist")
    .post(WatchlistController.updateTitleOrDescription);

router.route("/likeWatchlist")
    .get(WatchlistController.likeWatchlist);

router.route("/deleteWatchlist")
    .put(WatchlistController.deleteWatchlist);

router.route("/deleteMovieFromWatchlist")
    .put(WatchlistController.deleteMovieFromWatchlist);

module.exports = router;