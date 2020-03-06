const express = require("express");
let router = express.Router();

const userRoutes = require("./src/user/user.routes");
router.use("/user", userRoutes);

const reviewRoutes = require("./src/review/review.routes");
router.use("/review", reviewRoutes);

const watchlistRoutes = require("./src/watchlist/watchlist.routes");
router.use("/watchlist", watchlistRoutes);

module.exports = router;
