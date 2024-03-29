import mongooseUniqueValidator from 'mongoose-unique-validator';
import mongoose from 'mongoose';

const watchlistSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 45,
    },
    description: {
      type: String,
      default: '',
      maxlength: 50,
    },
    movies: [
      {
        movieId: { type: Number, sparse: true },
        movieTitle: String,
        moviePosterPath: String,
      },
    ],
    author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    likes: { type: Number, min: 0, default: 0 },
  },
  { timestamps: true }
);

watchlistSchema.plugin(mongooseUniqueValidator);

const Watchlist =
  mongoose.models.Watchlist ||
  mongoose.model('Watchlist', watchlistSchema, 'Watchlist');

export default Watchlist;
