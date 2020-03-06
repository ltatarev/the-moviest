const _ = require("lodash");
const ReviewService = require("./review.service");

class ReviewController {
  /**
   * FIND ALL REVIEWS:
   * Returns all reviews found on current page
   * @param  {number} page current page
   * @return {object} Reviews
   */
  static async findAllReviews(request, response) {
    const page = _.get(request, "query.page", 0);

    let reviews;

    try {
      reviews = await ReviewService.findAllReviews(page);
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully retrieved reviews!";
    return response.status(202).json({ message, reviews });
  }

  /**
   * FIND ALL REVIEWS WRITTEN BY AUTHOR:
   * Returns all reviews written by an author
   * @param  {string} authorId ID of author
   * @param  {number} page current page
   * @return {object} Reviews
   */
  static async findReviewsByAuthor(request, response) {
    const authorId = _.get(request, "query.id");
    const page = _.get(request, "query.page", 0);

    let reviews;

    try {
      reviews = await ReviewService.findReviewsByAuthor(authorId, page);
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully retrieved reviews!";
    return response.status(202).json({ message, reviews });
  }

  /**
   * FIND ALL REVIEWS FOR A MOVIE:
   * Returns all reviews written for a movie
   * @param  {number} page current page
   * @param  {string} movieTitle Title of queried movie
   * @return {object} Reviews
   */
  static async findReviewByMovie(request, response) {
    const page = _.get(request, "query.page", 0);
    const movieTitle = _.get(request, "query.movieTitle");

    let reviews;

    try {
      reviews = await ReviewService.findReviewByMovie(movieTitle, page);
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully retrieved reviews!";
    return response.status(202).json({ message, reviews });
  }

  /**
   * GET COUNT:
   * Returns number of reviews
   * @return {number} count
   */
  static async getCount(request, response) {
    let reviews;

    try {
      reviews = await ReviewService.getCount();
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully retrieved review count!";
    return response.status(202).json({ message, reviews });
  }

  /**
   * CREATE REVIEW:
   * Creates a review
   * @param  {string} title Review title
   * @param  {string} movie
   * @param  {number} rating Movie rating
   * @param  {string} reviewText Review content (optional)
   * @param  {string} authorId ID of author
   * @return {object} Review
   */
  static async createReview(request, response) {
    const { title, movie, rating, reviewText, authorId } = request.body;

    let review;

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

    const message = "Successfully created review!";
    return response.status(202).json({ message, review });
  }

  /**
   * UPDATE REVIEW:
   * Updates an existing review
   * @param  {string} reviewId Review ID
   * @param  {string} title
   * @param  {number} rating Movie rating
   * @param  {string} reviewText Review content (optional)
   * @return {object} Review
   */
  static async updateReview(request, response) {
    const { reviewId, title, rating, reviewText } = request.body;

    let review;

    try {
      review = await ReviewService.updateReview(
        reviewId,
        title,
        rating,
        reviewText
      );
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully updated review!";
    return response.status(202).json({ message, review });
  }

  /**
   * DELETE REVIEW:
   * Deletes an existing review
   * @param  {string} reviewId Review ID
   * @return {object} Review
   */
  static async deleteReview(request, response) {
    const { reviewId } = request.query;

    let review;

    try {
      review = await ReviewService.deleteReview(reviewId);
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully deleted review!";
    return response.status(202).json({ message, review });
  }

  /**
   * LIKE REVIEW:
   * Likes an existing review
   * @param  {string} reviewId Review ID
   * @return {object} Review
   */
  static async likeReview(request, response) {
    const { reviewId } = request.body;

    let review;

    try {
      review = await ReviewService.likeReview(reviewId);
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully liked review!";
    return response.status(202).json({ message, review });
  }

  /**
   * SORT REVIEWS BY TITLE:
   * Sorts reviews based on title
   * @param  {string} sort Movie title to sort by
   * @return {object} Reviews
   */
  static async sortReviewsByTitle(request, response) {
    const { sort } = request.query;

    let reviews;

    try {
      reviews = await ReviewService.sortReviewsByTitle(sort);
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully sorted reviews!";
    return response.status(202).json({ message, reviews });
  }

  /**
   * SORT BY TITLE AND AUTHOR:
   * Sorts reviews based on title and author
   * @param  {string} sort Movie title to sort by
   * @return {object} Reviews
   */
  static async sortReviewsByTitleAndAuthor(request, response) {
    const { sort } = request.query;

    let reviews;

    try {
      reviews = await ReviewService.sortReviewsByTitleAndAuthor(sort);
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully sorted reviews!";
    return response.status(202).json({ message, reviews });
  }
}

module.exports = ReviewController;
