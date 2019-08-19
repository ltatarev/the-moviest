const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    gravatarUrl: String,
    hash: String,
    salt: String
});

mongoose.model("Review", reviewSchema);