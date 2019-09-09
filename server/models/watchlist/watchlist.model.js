const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const watchlistSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 45
    },
    description: {
      type: String,
      default: "",
      maxlength: 50
    },
    movies: [
      {
        movieId: { type: Number, unique: false, sparse: true },
        movieTitle: String,
        moviePosterPath: String
      }
    ],
    author_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    likes: { type: Number, min: 0, default: 0 }
  },
  { timestamps: true }
);

// plugin for unique validation
watchlistSchema.plugin(mongooseUniqueValidator);

var Watchlist = mongoose.model("Watchlist", watchlistSchema, "Watchlist");

// make this available to our users in our applications
module.exports = Watchlist;
