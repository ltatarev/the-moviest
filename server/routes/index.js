const express = require('express');
let router = express.Router();

const userRoutes = require('./user.routes');
router.use('/user', userRoutes);

const reviewRoutes = require('./review.routes');
router.use('/review', reviewRoutes);

const watchlistRoutes = require('./watchlist.routes');
router.use('/watchlist', watchlistRoutes);

module.exports = router;