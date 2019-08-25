const mongoose = require('mongoose');
const Review = mongoose.model('Review');
const ObjectId = mongoose.Types.ObjectId;

class ReviewService {
    static async createReview(title, movie, rating, reviewText, authorId) {
        let author_id = ObjectId(authorId.toString());
        let review = new Review({ title, movie, rating, reviewText, author_id });
        await review.save();
        return review;
    }

    static async findAllReviews() {
        return await Review.find().populate('author_id', "username").exec();
    }

    static async findReviewByMovie(movieTitle) {
        return await Review.find({ 'movie.movieTitle': movieTitle })
            .populate('author_id', "username")
            .exec();
    }

    static async findReviewsByAuthor(authorId) {
        let author_id = ObjectId(authorId.toString());
        return await Review.find({ "author_id": author_id })
            .populate('author_id', "username")
            .exec();
    }

    static async updateReview(review_id, title, rating, reviewText) {
        return await Review.findOneAndUpdate({ _id: review_id }, { title, rating, reviewText }, { new: true });
    }

    static async deleteReview(review_id) {
        return await Review.findOneAndDelete({ _id: review_id });
    }
}

module.exports = ReviewService;