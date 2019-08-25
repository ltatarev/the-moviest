const mongoose = require('mongoose');
const Watchlist = mongoose.model('Watchlist');

const User = mongoose.model('User');
const ObjectId = mongoose.Types.ObjectId;

class WatchlistService {
    // * CREATE
    static async createWatchlist(title, description, movies, authorId) {
        let author_id = ObjectId(authorId.toString());
        let watchlist = new Watchlist({ title, description, movies, author_id });

        // * FIXME: POPULATE
        await Watchlist.findById({ _id: watchlist._id })
            .populate('author_id', "username")
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

        let watchlist = await Watchlist.findByIdAndUpdate({ _id }, { $inc: { likes: 1 } }, { new: true, fields: "likes" }).exec();;

        await watchlist.save();
        return watchlist;
    }

    // * DELETE WATCHLIST
    static async deleteWatchlist(_id) {
        let watchlist_id = ObjectId(_id.toString());

        await Watchlist.findByIdAndDelete(watchlist_id, function(err) {
            if (err) return err;
            return "Succesfully deleted watchlist!";
        }).exec();
    }

    // * DELETE A SINGLE MOVIE
    static async deleteMovieFromWatchlist(_id, movieId) {
        let watchlist_id = ObjectId(_id.toString());

        await Watchlist.findOneAndUpdate({ _id: watchlist_id }, { $pull: { movies: { movieId } } }, { new: true },
            function(err) {
                if (err) { return err }
                return "Succesfully deleted movie from watchlist!";
            }
        ).exec();
    }

}

module.exports = WatchlistService;