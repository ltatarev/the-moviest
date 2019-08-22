const mongoose = require('mongoose');

const watchlistSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15
    },
    description: {
        type: String,
        maxlength: 50
    },
    movies: [{
        movieId: Number,
        movieTitle: String,
        moviePosterPath: String
    }],
    author: [{ type: Schema.ObjectId, ref: 'User' }],
    likes: { type: Number, min: 0 }
}, { timestamps: true });

mongoose.model("Watchlist", watchlistSchema);