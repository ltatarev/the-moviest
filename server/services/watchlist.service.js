const mongoose = require('mongoose');
const Watchlist = mongoose.model('Watchlist');
const User = mongoose.model('User');

class WatchlistService {
    // * CREATE
    static async createWatchlist(title, description = "", movies, authorId) {
        let watchlist = new Watchlist({ title, description, movies, authorId });

        await User.find({ _id: authorId })
            .populate('watchlist')
            .exec();

        await watchlist.save();
        return watchlist;
    }

    // * UPDATE TITLE OR DESCRIPTION
    static async updateTitleOrDescription(_id, title, description) {
        let watchlist_id = ObjectId(_id.toString());

        let watchlist = await Watchlist.findByIdAndUpdate({ _id: watchlist_id }, { title, description }, { new: true, upsert: true }).exec();

        await watchlist.save();
        return watchlist;
    }

    // * LIKE
    static async likeWatchlist(_id) {
        let watchlist_id = ObjectId(_id.toString());

        let watchlist = await Watchlist.findByIdAndUpdate({ _id }, { $inc: { likes: 1 } }, { new: true }).exec();;

        await watchlist.save(done);
        return watchlist;
    }

    static async deleteWatchlist(_id) {
        let watchlist_id = ObjectId(_id.toString());

        await Watchlist.findByIdAndDelete(watchlist_id, function(err) {
            if (err) return err;
            return "Succesfully deleted";
        }).exec();;
    }

    // * DELETE A SINGLE MOVIE
    static async deleteMovieFromWatchlist(_id, movieId) {
        let watchlist_id = ObjectId(_id.toString());
        let movie_id = ObjectId(movieId.toString());

        await Watchlist.findOneAndUpdate({ _id: watchlist_id }, { $pull: { movies: { _id: movie_id } } }, { new: true },
            function(err) {
                if (err) { return err }
            }
        ).exec();

        return "Succesfully deleted movie";
    }

}

module.exports = WatchlistService;