const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 45
    },
    movie: {
      movieId: { type: Number },
      movieTitle: String
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
    author_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    likes: { type: Number, min: 0 }
  },
  { timestamps: true }
);

var Review = mongoose.model("Review", reviewSchema, "Review");

// make this available to our users in our applications
module.exports = Review;
