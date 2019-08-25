const mongoose = require('mongoose').set('debug', true);
const User = mongoose.model('User');

class UserService {
    static async createUser(username, email, password) {
        let user = new User({ email, username });
        user.setPassword(password);

        await user.save();
        return user;
    }

    static async updateUsername(username, newUsername) {
        return await User.findOneAndUpdate({ username }, { username: newUsername }, { returnOriginal: false }).exec();
    }

    static async updatePassword(username, password) {
        let user = await User.findOne({ username }, "username");
        user.setPassword(password);
        await user.save();
        return user;
    }

    static async updateAvatar(username, avatarURL) {
        return await User.findOneAndUpdate({ username, avatarURL }).exec();
    }

    static async findUserByUsername(username) {
        return await User.findOne({ username }).exec();
    }

    static async getProfileData(username) {
        return await User.findOne({ username }, { hash: false, salt: false, email: false, __v: false, createdAt: false, updatedAt: false }).exec();
    }

    static async createOrUpdateBio(username, bio) {
        return await User.findOneAndUpdate({ username }, { bio }, { upsert: true, fields: "bio", returnOriginal: false }).exec();
    }

    static async createOrUpdateCurrentlyWatching(username, currentlyWatching) {
        return await User.findOneAndUpdate({ username }, { currentlyWatching }, { upsert: true, fields: "currently watching", returnOriginal: false }).exec();
    }

    static async createOrUpdateFavorites(username, movie = "", tvShow = "", actor = "", genre = "") {
        return await User.findOneAndUpdate({ username }, { favorites: { movie, tvShow, actor, genre } }, { upsert: true, fields: "favorites", returnOriginal: false }).exec();
    }

}

module.exports = UserService;