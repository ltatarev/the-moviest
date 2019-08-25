const express = require('express');
let router = express.Router();

const ReviewController = require('../controllers/review.controller');

router.route("/createReview")
    .post(ReviewController.createReview);

router.route("/findReviewByMovie")
    .get(ReviewController.findReviewByMovie);

router.route("/updateReview")
    .put(ReviewController.updateReview);

router.route("/findReviewsByAuthor")
    .get(ReviewController.findReviewsByAuthor);

router.route("/findAllReviews")
    .get(ReviewController.findAllReviews);

router.route("/deleteReview")
    .delete(ReviewController.deleteReview);

module.exports = router;