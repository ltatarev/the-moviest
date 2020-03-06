const mongoose = require("mongoose");
const Review = mongoose.model("Review");
const ObjectId = mongoose.Types.ObjectId;

class ReviewService {
  /**
   * FIND ALL REVIEWS:
   * Returns all reviews found on current page
   * @param  {number} page current page
   * @return {object} Reviews populated with authorId & username
   */
  static async findAllReviews(page = 0) {
    return await Review.find()
      .skip(20 * page)
      .limit(20)
      .populate("author_id", "username")
      .exec();
  }

  /**
   * FIND ALL REVIEWS WRITTEN BY AUTHOR:
   * Returns all reviews written by an author
   * @param  {string} authorId ID of author
   * @param  {number} page current page
   * @return {object} Reviews
   */
  static async findReviewsByAuthor(authorId, page = 0) {
    const author_id = ObjectId(authorId.toString());
    return await Review.find({ author_id: author_id })
      .skip(20 * page)
      .limit(20)
      .populate("author_id", "username")
      .exec();
  }

  /**
   * FIND ALL REVIEWS FOR A MOVIE:
   * Returns all reviews written for a movie
   * @param  {number} page current page
   * @param  {string} movieTitle Title of queried movie
   * @return {object} Reviews
   */
  static async findReviewByMovie(movieTitle, page = 0) {
    const title = movieTitle.toString();
    return await Review.find({
      "movie.movieTitle": { $regex: title, $options: "i" }
    })
      .skip(20 * page)
      .limit(20)
      .populate("author_id", "username")
      .exec();
  }

  /**
   * GET COUNT:
   * Returns number of reviews
   * @return {number} count
   */
  static async getCount() {
    return await Review.count().exec();
  }

  /**
   * CREATE REVIEW:
   * Creates a review
   * @param {string} title Review title
   * @param {string} movie
   * @param {number} rating Movie rating
   * @param {string} reviewText Review content (optional)
   * @param {string} authorId ID of author
   * @return {object} Review
   */
  static async createReview(title, movie, rating, reviewText, authorId) {
    const author_id = ObjectId(authorId.toString());
    const review = new Review({ title, movie, rating, reviewText, author_id });
    await review.save();
    return review;
  }

  /**
   * UPDATE REVIEW:
   * Updates an existing review
   * @param {string} reviewId Review ID
   * @param {string} title
   * @param {number} rating Movie rating
   * @param {string} reviewText Review content (optional)
   * @return {object} Review
   */
  static async updateReview(review_id, title, rating, reviewText) {
    return await Review.findOneAndUpdate(
      { _id: review_id },
      { title, rating, reviewText },
      { new: true }
    ).exec();
  }

  /**
   * DELETE REVIEW:
   * Deletes an existing review
   * @param {string} reviewId Review ID
   * @return {object} Review
   */
  static async deleteReview(review_id) {
    return await Review.findOneAndDelete({ _id: review_id }).exec();
  }

  /**
   * LIKE REVIEW:
   * Likes an existing review
   * @param {string} reviewId Review ID
   * @return {object} Review
   */
  static async likeReview(review_id) {
    const _id = ObjectId(review_id.toString());
    return await Review.findByIdAndUpdate(
      { _id },
      { $inc: { likes: 1 } },
      { returnOriginal: false }
    ).exec();
  }

  /**
   * SORT REVIEWS BY TITLE:
   * Sorts reviews based on title
   * @param {string} sort Movie title to sort by
   * @return {object} Reviews
   */
  static async sortReviewsByTitle(sort) {
    return await Review.find({})
      .sort({ "movie.movieTitle": sort })
      .populate("author_id", "username")
      .exec();
  }

  /**
   * SORT BY TITLE AND AUTHOR:
   * Sorts reviews based on title and author
   * @param {string} sort Movie title to sort by
   * @return {object} Reviews
   */
  static async sortReviewsByTitleAndAuthor(authorId, sort) {
    const author_id = ObjectId(authorId.toString());
    return await Review.findById({ author_id })
      .sort({ "movie.movieTitle": sort })
      .populate("author_id", "username")
      .exec();
  }
}

module.exports = ReviewService;
