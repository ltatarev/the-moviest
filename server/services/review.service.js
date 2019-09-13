const mongoose = require("mongoose");
const Review = mongoose.model("Review");
const ObjectId = mongoose.Types.ObjectId;

class ReviewService {
  // ************************************************************
  // * FIND ALL REVIEWS
  static async findAllReviews(page = 0) {
    return await Review.find()
      .skip(20 * page)
      .limit(20)
      .populate("author_id", "username")
      .exec();
  }

  // ************************************************************
  // * FIND ALL REVIEWS WRITTEN BY AUTHOR
  static async findReviewsByAuthor(authorId, page = 0) {
    let author_id = ObjectId(authorId.toString());
    return await Review.find({ author_id: author_id })
      .skip(20 * page)
      .limit(20)
      .populate("author_id", "username")
      .exec();
  }

  // ************************************************************
  // * FIND ALL REVIEWS FOR MOVIES
  static async findReviewByMovie(movieTitle, page = 0) {
    let title = movieTitle.toString();
    return await Review.find({
      "movie.movieTitle": { $regex: title, $options: "i" }
    })
      .skip(20 * page)
      .limit(20)
      .populate("author_id", "username")
      .exec();
  }

  // ************************************************************
  // * GET COUNT
  static async getCount() {
    return await Review.count().exec();
  }

  // ************************************************************
  // * CREATE REVIEW
  static async createReview(title, movie, rating, reviewText, authorId) {
    let author_id = ObjectId(authorId.toString());
    let review = new Review({ title, movie, rating, reviewText, author_id });
    await review.save();
    return review;
  }

  // ************************************************************
  // * UPDATE REVIEW
  static async updateReview(review_id, title, rating, reviewText) {
    return await Review.findOneAndUpdate(
      { _id: review_id },
      { title, rating, reviewText },
      { new: true }
    ).exec();
  }

  // ************************************************************
  // * DELETE REVIEW
  static async deleteReview(review_id) {
    return await Review.findOneAndDelete({ _id: review_id }).exec();
  }

  // ************************************************************
  // * LIKE REVIEW
  static async likeReview(review_id) {
    let _id = ObjectId(review_id.toString());
    return await Review.findByIdAndUpdate(
      { _id },
      { $inc: { likes: 1 } },
      { returnOriginal: false }
    ).exec();
  }

  // ************************************************************
  // * SORT REVIEW
  static async sortReviewsByTitle(sort) {
    return await Review.find()
      .skip(20 * page)
      .limit(20)
      .sort({ title: "desc" })
      .populate("author_id", "username")
      .exec();
  }

  // ************************************************************
  // * SORT REVIEW FOR A CERTAIN USER
  static async sortReviewsByTitleAndAuthor(authorId, sort) {
    let author_id = ObjectId(authorId.toString());
    return await Review.findById({ author_id })
      .sort({ title: "desc" })
      .populate("author_id", "username")
      .exec();
  }
}

module.exports = ReviewService;
