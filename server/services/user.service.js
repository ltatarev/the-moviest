const mongoose = require('mongoose').set('debug', true);
const User = mongoose.model('User');

class UserService {
    // ************************************************************
    // * CREATE USER
    static async createUser(username, email, password) {
        let user = new User({ email, username });
        user.setPassword(password);

        await user.save();
        return user;
    }

    // ************************************************************
    // * CREATE USER
    static async createOrUpdateBio(username, bio) {
        return await User.findOneAndUpdate({ username }, { bio }, { upsert: true, fields: "bio", returnOriginal: false }).exec();
    }

    // ************************************************************
    // * CREATE OR UPDATE CURRENTLY WATCHING
    static async createOrUpdateCurrentlyWatching(username, currentlyWatching) {
        return await User.findOneAndUpdate({ username }, { currentlyWatching }, { upsert: true, fields: "currently watching", returnOriginal: false }).exec();
    }

    // ************************************************************
    // *  CREATE OR UPDATE FAVORITES
    static async createOrUpdateFavorites(username, movie = "", tvShow = "", actor = "", genre = "") {
        return await User.findOneAndUpdate({ username }, { favorites: { movie, tvShow, actor, genre } }, { upsert: true, fields: "favorites", returnOriginal: false }).exec();
    }

    // ************************************************************
    // * FIND USER BY USERNAME
    static async findUserByUsername(username) {
        return await User.findOne({ username }).exec();
    }

    // ************************************************************
    // * FIND ALL CURRENTLY WATCHING
    static async findAllCurrentlyWatching(movieTitle) {
        return await User.find({ currentlyWatching: movieTitle }, { username: true, avatarURL: true }).exec();
    }

    // ************************************************************
    // * GET PROFILE DATA
    static async getProfileData(username) {
        return await User.findOne({ username }, { hash: false, salt: false, email: false, __v: false, createdAt: false, updatedAt: false })
            .populate("reviews")
            .populate("watchlists")
            .exec();
    }

    // ************************************************************
    // * UPDATE AVATAR
    static async updateAvatar(username, avatarURL) {
        return await User.findOneAndUpdate({ username }, { avatarURL }).exec();
    }

    // ************************************************************
    // * UPDATE PASSWORD
    static async updatePassword(username, password) {
        let user = await User.findOne({ username }, "username");
        user.setPassword(password);
        await user.save();
        return user;
    }

    // ************************************************************
    // * UPDATE USERNAME
    static async updateUsername(username, newUsername) {
        return await User.findOneAndUpdate({ username }, { username: newUsername }, { returnOriginal: false }).exec();
    }

}

module.exports = UserService;