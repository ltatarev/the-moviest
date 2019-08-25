const mongoose = require('mongoose');
const Review = mongoose.model('Review');

class ReviewService {
    static async createReview(title, movie, rating, reviewText, authorId) {
        let review = new Review({ title, movie, rating, reviewText, authorId });

        await User.find({ _id: authorId })
            .populate('review')
            .exec();

        await review.save();
        return review;
    }

    static async findReviewByMovie(movieTitle) {
        return await Review.find({ 'movie.MovieTitle': movieTitle }).exec();
    }

    static async updateReview(review_id, title, rating, reviewText) {
        return await Review.findOneAndUpdate({ _id: review_id }, { title, rating, reviewText }, { new: true });
    }
}

module.exports = ReviewService;