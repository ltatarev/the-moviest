const ReviewService = require('../services/review.service');

class ReviewController {
    // * CREATE
    static async createReview(request, response) {
        let title = request.body.title;
        let movie = request.body.movie;
        let rating = request.body.rating;
        let reviewText = request.body.reviewText;
        let authorId = request.body.authorId;

        let review, message;

        try {
            review = await ReviewService.createReview(title, movie, rating, reviewText, authorId);
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }

        message = "Successfully created review!";
        return response.status(202).json({ message, review });
    }

    // * FIND ALL REVIEWS
    static async findAllReviews(request, response) {
        let reviews, message;

        try {
            reviews = await ReviewService.findAllReviews();
        } catch (err) {
            return response.status(500).json(err);
        }

        message = "Successfully retrieved reviews!";
        return response.status(202).json({ message, reviews });

    }

    // * FIND ALL REVIEWS FOR MOVIES
    static async findReviewByMovie(request, response) {
        let movieTitle = request.body.movieTitle;

        let reviews, message;

        try {
            reviews = await ReviewService.findReviewByMovie(movieTitle);
        } catch (err) {
            return response.status(500).json(err);
        }

        message = "Successfully retrieved reviews!";
        return response.status(202).json({ message, reviews });

    }

    // * FIND ALL REVIEWS WRITTEN BY AUTHOR
    static async findReviewsByAuthor(request, response) {
        let authorId = request.body.authorId;

        let reviews, message;

        try {
            reviews = await ReviewService.findReviewsByAuthor(authorId);
        } catch (err) {
            return response.status(500).json(err);
        }

        message = "Successfully retrieved reviews!";
        return response.status(202).json({ message, reviews });

    }

    // * UPDATE REVIEW
    static async updateReview(request, response) {
        let reviewId = request.body.reviewId;
        let title = request.body.title;
        let rating = request.body.rating;
        let reviewText = request.body.reviewText;

        let watchlist, message;

        try {
            watchlist = await ReviewService.updateReview(reviewId, title, rating, reviewText);
        } catch (err) {
            return response.status(500).json(err);
        }

        message = "Successfully updated watchlist!";
        return response.status(202).json({ message, watchlist });
    }



}

module.exports = ReviewController;