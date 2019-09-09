const mongoose = require("mongoose").set("debug", true);
const User = mongoose.model("User");
const ObjectId = mongoose.Types.ObjectId;

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
  // * CREATE OR UPDATE BIO
  static async createOrUpdateBio(userId, bio) {
    let id = ObjectId(userId.toString());
    return await User.findByIdAndUpdate(
      id,
      { bio },
      { upsert: true, fields: "bio", returnOriginal: false }
    ).exec();
  }

  // ************************************************************
  // * CREATE OR UPDATE CURRENTLY WATCHING
  static async createOrUpdateCurrentlyWatching(userId, currentlyWatching) {
    let id = ObjectId(userId.toString());
    return await User.findByIdAndUpdate(
      id,
      { currentlyWatching },
      { upsert: true, fields: "currently watching", returnOriginal: false }
    ).exec();
  }

  // ************************************************************
  // *  CREATE OR UPDATE FAVORITES
  static async createOrUpdateFavorites(userId, favorites) {
    let id = ObjectId(userId.toString());
    let { movie, tvShow, actor, genre } = favorites;
    return await User.findByIdAndUpdate(
      id,
      {
        "favorites.movie": movie,
        "favorites.tvShow": tvShow,
        "favorites.genre": genre,
        "favorites.actor": actor
      },
      { upsert: true, fields: "favorites", returnOriginal: false }
    ).exec();
  }

  // ************************************************************
  // * FIND USER BY USERNAME
  static async findUserByUsername(username) {
    return await User.findOne({ username }).exec();
  }

  // ************************************************************
  // * FIND ALL CURRENTLY WATCHING
  static async findAllCurrentlyWatching(movieTitle) {
    return await User.find(
      { currentlyWatching: movieTitle },
      { username: true, avatarURL: true }
    ).exec();
  }

  // ************************************************************
  // * GET PROFILE DATA
  static async getProfileData(userId) {
    let id = ObjectId(userId.toString());
    return await User.findById(id, {
      hash: false,
      salt: false,
      email: false,
      __v: false,
      createdAt: false,
      updatedAt: false
    }).exec();
  }

  // ************************************************************
  // * UPDATE AVATAR
  static async updateAvatar(userId, avatarURL) {
    let id = ObjectId(userId.toString());
    return await User.findByIdAndUpdate(
      id,
      { avatarURL },
      { returnOriginal: false }
    ).exec();
  }

  // ************************************************************
  // * UPDATE PASSWORD
  static async updatePassword(userId, password) {
    let id = ObjectId(userId.toString());
    let user = await User.findById(id).exec();
    user.setPassword(password);
    await user.save();
    return user;
  }

  // ************************************************************
  // * UPDATE USERNAME
  static async updateUsername(userId, username) {
    let id = ObjectId(userId.toString());
    return await User.findByIdAndUpdate(
      id,
      { username },
      { returnOriginal: false }
    ).exec();
  }
}

module.exports = UserService;
