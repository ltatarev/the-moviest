const ReviewService = require("../services/review.service");

class ReviewController {
  // ************************************************************
  // * FIND ALL REVIEWS
  static async findAllReviews(request, response) {
    let page = request.query.page ? request.query.page : 0;
    let reviews, message;

    try {
      reviews = await ReviewService.findAllReviews(page);
    } catch (err) {
      return response.status(500).json(err);
    }

    message = "Successfully retrieved reviews!";
    return response.status(202).json({ message, reviews });
  }

  // ************************************************************
  // * FIND ALL REVIEWS WRITTEN BY AUTHOR
  static async findReviewsByAuthor(request, response) {
    let page = request.query.page ? request.query.page : 0;
    let authorId = request.query.id;

    let reviews, message;

    try {
      reviews = await ReviewService.findReviewsByAuthor(authorId, page);
    } catch (err) {
      return response.status(500).json(err);
    }

    message = "Successfully retrieved reviews!";
    return response.status(202).json({ message, reviews });
  }

  // ************************************************************
  // * FIND ALL REVIEWS FOR MOVIES
  static async findReviewByMovie(request, response) {
    let page = request.query.page ? request.query.page : 0;
    let movieTitle = request.query.movieTitle;

    let reviews, message;

    try {
      reviews = await ReviewService.findReviewByMovie(movieTitle, page);
    } catch (err) {
      return response.status(500).json(err);
    }

    message = "Successfully retrieved reviews!";
    return response.status(202).json({ message, reviews });
  }

  // ************************************************************
  // * CREATE REVIEW
  static async createReview(request, response) {
    let { title, movie, rating, reviewText, authorId } = request.body;

    let review, message;

    try {
      review = await ReviewService.createReview(
        title,
        movie,
        rating,
        reviewText,
        authorId
      );
    } catch (err) {
      console.log(err);
      return response.status(500).json(err);
    }

    message = "Successfully created review!";
    return response.status(202).json({ message, review });
  }

  // ************************************************************
  // * UPDATE REVIEW
  static async updateReview(request, response) {
    let reviewId = request.body.reviewId;
    let title = request.body.title;
    let rating = request.body.rating;
    let reviewText = request.body.reviewText;

    let watchlist, message;

    try {
      watchlist = await ReviewService.updateReview(
        reviewId,
        title,
        rating,
        reviewText
      );
    } catch (err) {
      return response.status(500).json(err);
    }

    message = "Successfully updated watchlist!";
    return response.status(202).json({ message, watchlist });
  }

  // ************************************************************
  // * DELETE REVIEW
  static async deleteReview(request, response) {
    let reviewId = request.body.reviewId;

    let review, message;

    try {
      review = await ReviewService.deleteReview(reviewId);
    } catch (err) {
      return response.status(500).json(err);
    }

    message = "Successfully deleted review!";
    return response.status(202).json({ message, review });
  }

    // ************************************************************
  // * LIKE REVIEW
  static async likeReview(request, response) {
    let reviewId = request.body.reviewId;

    let review, message;

    try {
      review = await ReviewService.likeReview(reviewId);
    } catch (err) {
      return response.status(500).json(err);
    }

    message = "Successfully liked review!";
    return response.status(202).json({ message, review });
  }
}

module.exports = ReviewController;
