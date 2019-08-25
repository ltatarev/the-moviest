const mongoose = require('mongoose');
const Review = mongoose.model('Review');
const User = mongoose.model('User');
const ObjectId = mongoose.Types.ObjectId;

class ReviewService {
    static async createReview(title, movie, rating, reviewText, authorId) {
        let author_id = ObjectId(authorId.toString());
        let review = new Review({ title, movie, rating, reviewText, author_id });

        // * FIXME: add populate
        await User.find({ _id: authorId })
            .populate('review')
            .exec();

        await review.save();
        return review;
    }

    static async findReviewByMovie(movieTitle) {
        return await Review.find({ 'movie.movieTitle': movieTitle }).exec();
    }

    static async updateReview(review_id, title, rating, reviewText) {
        return await Review.findOneAndUpdate({ _id: review_id }, { title, rating, reviewText }, { new: true });
    }
}

module.exports = ReviewService;