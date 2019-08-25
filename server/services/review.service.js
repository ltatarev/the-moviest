const mongoose = require('mongoose');
const Review = mongoose.model('Review');
const ObjectId = mongoose.Types.ObjectId;

class ReviewService {

    // ************************************************************
    // * FIND ALL REVIEWS
    static async findAllReviews() {
        return await Review.find().populate('author_id', "username").exec();
    }

    // ************************************************************
    // * FIND ALL REVIEWS WRITTEN BY AUTHOR
    static async findReviewsByAuthor(authorId) {
        let author_id = ObjectId(authorId.toString());
        return await Review.find({ "author_id": author_id })
            .populate('author_id', "username")
            .exec();
    }

    // * FIND ALL REVIEWS FOR MOVIES
    // ************************************************************
    static async findReviewByMovie(movieTitle) {
        return await Review.find({ 'movie.movieTitle': movieTitle })
            .populate('author_id', "username")
            .exec();
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
        return await Review.findOneAndUpdate({ _id: review_id }, { title, rating, reviewText }, { new: true });
    }

    // ************************************************************
    // * DELETE REVIEW
    static async deleteReview(review_id) {
        return await Review.findOneAndDelete({ _id: review_id });
    }

}

module.exports = ReviewService;