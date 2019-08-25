const express = require('express');
let router = express.Router();

const userRoutes = require('./user.routes');
router.use('/user', userRoutes);

const reviewRoutes = require('./review.routes');
router.use('/review', reviewRoutes);

const watchlistRoutes = require('./watchlist.routes');
router.use('/watchlist', watchlistRoutes);

/* const movieRoutes = require('./movie.routes');
router.use('/movie', movieRoutes);

const tvRoutes = require('./tv.routes');
router.use('/tv', tvRoutes);
 */

module.exports = router;