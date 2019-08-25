const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');
const methods = require("./plugins/methods.js");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username required'],
        unique: true,
        lowercase: true,
        minlength: 3,
        maxlength: 15,
        match: [/^[a-zA-Z0-9]+$/, 'Username is invalid'],
        index: true
    },
    email: {
        type: String,
        minlength: 6,
        required: [true, 'E-mail required'],
        unique: true,
        index: true
    },
    hash: String,
    salt: String,
    avatarURL: { type: String, default: "015-clapperboard.png" },
    bio: { type: String, default: "Say something about yourself" },
    currentlyWatching: { type: String, default: "Not watching anything 😔" },
    favorites: {
        movie: String,
        tvShow: String,
        actor: String,
        genre: String
    },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    watchlists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Watchlist' }]
}, { timestamps: true });


// Requiring methods
userSchema.plugin(methods);

// plugin for unique validation
userSchema.plugin(mongooseUniqueValidator);

var User = mongoose.model('User', userSchema, "User");

// make this available to our users in our applications
module.exports = User;