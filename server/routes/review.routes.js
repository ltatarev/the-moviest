const express = require("express");
let router = express.Router();

const ReviewController = require("../controllers/review.controller");

router.route("/findAllReviews").get(ReviewController.findAllReviews);

router.route("/findReviewsByAuthor").get(ReviewController.findReviewsByAuthor);

router.route("/findReviewByMovie").get(ReviewController.findReviewByMovie);

router.route("/createReview").post(ReviewController.createReview);

router.route("/likeReview").post(ReviewController.likeReview);

router.route("/updateReview").put(ReviewController.updateReview);

router.route("/deleteReview").delete(ReviewController.deleteReview);

module.exports = router;
