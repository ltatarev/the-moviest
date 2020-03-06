const express = require("express");
let router = express.Router();

const WatchlistController = require("./watchlist.controller");

// GET
router.route("/findAllWatchlists").get(WatchlistController.findAllWatchlists);

router
  .route("/findWatchlistsByAuthor")
  .get(WatchlistController.findAllWatchlistsByAuthorId);

router
  .route("/findWatchlistsByName")
  .get(WatchlistController.findWatchlistsByName);

router
  .route("/sortWatchlistsByTitle")
  .get(WatchlistController.sortWatchlistsByTitle);

router
  .route("/sortWatchlistsByTitleAndAuthor")
  .get(WatchlistController.sortWatchlistsByTitleAndAuthor);

// POST
router
  .route("/addMovieToWatchlist")
  .post(WatchlistController.addMovieToWatchlist);

router.route("/createWatchlist").post(WatchlistController.createWatchlist);

router.route("/likeWatchlist").post(WatchlistController.likeWatchlist);

// PUT
router
  .route("/updateTitleOrDescription")
  .put(WatchlistController.updateTitleOrDescription);

// DELETE
router.route("/deleteWatchlist").delete(WatchlistController.deleteWatchlist);

router
  .route("/deleteMovieFromWatchlist")
  .delete(WatchlistController.deleteMovieFromWatchlist);

module.exports = router;
