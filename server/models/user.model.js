const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const secret = require('../utils/jwt').secret;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: 3,
        maxlength: 15,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true
    },
    email: {
        type: String,
        minlength: 6,
        required: true,
        unique: true,
        index: true
    },
    hash: String,
    salt: String,
    profilePicture: String,
    bio: String,
    currentlyWatching: String,
    favorites: [{
        movie: String,
        tvShow: String,
        actor: String,
        genre: String
    }],
    tvShows: [{
        name: String,
        url: String,
        episodesWatched: [
            { S00E00: String }
        ]
    }],
    reviews: [{ type: Schema.ObjectId, ref: 'Review' }],
    watchlists: [{ type: Schema.ObjectId, ref: 'Watchlist' }]
}, { timestamps: true });

userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString("hex");
}

userSchema.methods.validPassword = function(password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString("hex");
    return this.hash == hash;
}

userSchema.methods.generateJWT = function() {
    let expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        exp: Math.trunc(expiry.getTime() / 1000)
    }, secret);
}

mongoose.model("User", userSchema);