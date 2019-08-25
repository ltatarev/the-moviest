const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

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
        movieId: { type: Number, unique: true },
        movieTitle: String,
        moviePosterPath: String
    }],
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    likes: { type: Number, min: 0 }
}, { timestamps: true });


// plugin for unique validation
watchlistSchema.plugin(mongooseUniqueValidator);

var Watchlist = mongoose.model('Watchlist', watchlistSchema, 'Watchlist');

// make this available to our users in our applications
module.exports = Watchlist;