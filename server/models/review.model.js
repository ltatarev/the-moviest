const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        required: true
    },
    reviewText: {
        type: String,
        maxlength: 400
    },
    author: [{ type: Schema.ObjectId, ref: 'User' }],
    likes: { type: Number, min: 0 }
}, { timestamps: true });


mongoose.model("Review", reviewSchema);