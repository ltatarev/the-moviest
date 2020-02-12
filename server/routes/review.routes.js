const express = require("express");
let router = express.Router();

const ReviewController = require("../controllers/review.controller");

// GET
router.route("/getCount").get(ReviewController.getCount);

router.route("/findAllReviews").get(ReviewController.findAllReviews);

router.route("/findReviewsByAuthor").get(ReviewController.findReviewsByAuthor);

router.route("/findReviewByMovie").get(ReviewController.findReviewByMovie);

router.route("/sortReviewsByTitle").get(ReviewController.sortReviewsByTitle);

router
  .route("/sortReviewsByTitleAndAuthor")
  .get(ReviewController.sortReviewsByTitleAndAuthor);

// POST
router.route("/createReview").post(ReviewController.createReview);

router.route("/likeReview").post(ReviewController.likeReview);

// PUT
router.route("/updateReview").put(ReviewController.updateReview);

// DELETE
router.route("/deleteReview").delete(ReviewController.deleteReview);

module.exports = router;
