const express = require('express');
let router = express.Router();

const WatchlistController = require('../controllers/watchlist.controller');

router.route("/createWatchlist")
    .post(WatchlistController.createWatchlist);

router.route("/updateTitleOrDescription")
    .put(WatchlistController.updateTitleOrDescription);

router.route("/likeWatchlist")
    .post(WatchlistController.likeWatchlist);

router.route("/deleteWatchlist")
    .delete(WatchlistController.deleteWatchlist);

router.route("/deleteMovieFromWatchlist")
    .delete(WatchlistController.deleteMovieFromWatchlist);

router.route("/findAllWatchlists")
    .get(WatchlistController.findAllWatchlists);

router.route("/findAllWatchlistsByAuthorId")
    .get(WatchlistController.findAllWatchlistsByAuthorId);

module.exports = router;