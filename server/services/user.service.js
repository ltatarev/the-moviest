const mongoose = require("mongoose").set("debug", true);
const User = mongoose.model("User");
const ObjectId = mongoose.Types.ObjectId;

class UserService {
  /**
   * CREATE USER:
   * Creates a new user
   * @param  {string} username Username
   * @param  {string} email Email
   * @param  {string} password Password
   * @return {object} User
   */
  static async createUser(username, email, password) {
    let user = new User({ email, username });
    user.setPassword(password);

    await user.save();
    return user;
  }

  /**
   * CREATE OR UPDATE BIO:
   * Creates or updates user bio
   * @param  {string} userId User ID
   * @param  {string} bio User bio
   * @return {object} Updated user
   */
  static async createOrUpdateBio(userId, bio) {
    const id = ObjectId(userId.toString());
    return await User.findByIdAndUpdate(
      id,
      { bio },
      { upsert: true, fields: "bio", returnOriginal: false }
    ).exec();
  }

  /**
   * CREATE OR UPDATE CURRENTLY WATCHING:
   * Creates or updates user bio
   * @param  {string} userId User ID
   * @param  {string} currentlyWatching Currently watching
   * @return {object} Updated user
   */
  static async createOrUpdateCurrentlyWatching(userId, currentlyWatching) {
    const id = ObjectId(userId.toString());
    return await User.findByIdAndUpdate(
      id,
      { currentlyWatching },
      { upsert: true, fields: "currently watching", returnOriginal: false }
    ).exec();
  }

  /**
   * CREATE OR UPDATE FAVORITES:
   * Creates or updates user bio
   * @param  {string} userId User ID
   * @param  {array} favorites Users favorites
   * @return {object} Updated user
   */
  static async createOrUpdateFavorites(userId, favorites) {
    const id = ObjectId(userId.toString());
    const { movie, tvShow, actor, genre } = favorites;
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

  /**
   * FIND USER BY USERNAME:
   * Finds a single user by username
   * @param  {string} username Username
   * @return {object} Updated user
   */
  static async findUserByUsername(username) {
    return await User.findOne({ username }).exec();
  }

  /**
   * FIND ALL CURRENTLY WATCHING:
   * Finds all users that are currently watching queried movie
   * @param  {string} movieTitle Title of currently watching movie
   * @return {object} Updated user
   */
  static async findAllCurrentlyWatching(movieTitle) {
    return await User.find(
      { currentlyWatching: movieTitle },
      { username: true, avatarURL: true }
    ).exec();
  }

  /**
   * GET PROFILE DATA:
   * Finds all users that are currently watching queried movie
   * @param  {string} id User ID
   * @return {object} User data (avatar, bio, currently watching, favorites, watchlist)
   */
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

  /**
   * UPDATE AVATAR:
   * Updates avatar picture for a user
   * @param  {string} id User ID
   * @return {object} Updated user
   */
  static async updateAvatar(userId, avatarURL) {
    const id = ObjectId(userId.toString());
    return await User.findByIdAndUpdate(
      id,
      { avatarURL },
      { returnOriginal: false }
    ).exec();
  }

  /**
   * UPDATE PASSWORD:
   * Updates password for a user
   * @param  {string} id User ID
   * @param  {string} password New password
   * @return {object} Updated user
   */
  static async updatePassword(userId, password) {
    let id = ObjectId(userId.toString());
    let user = await User.findById(id).exec();
    user.setPassword(password);
    await user.save();
    return user;
  }

  /**
   * UPDATE USERNAME:
   * Updates username for a user
   * @param  {string} id User ID
   * @param  {string} username New username
   * @return {object} Updated user
   */
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
