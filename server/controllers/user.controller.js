const UserService = require("../services/user.service");

class UserController {
  /**
   * FIND USER BY USERNAME:
   * Finds a single user by username
   * @param  {string} username Username
   * @return {object} Updated user
   */
  static async findUserByUsername(request, response) {
    const { username } = request.query;

    let user;

    try {
      user = await UserService.findUserByUsername(username);
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully found user!";
    return response.status(200).json({ message, user });
  }

  /**
   * FIND ALL CURRENTLY WATCHING:
   * Finds all users that are currently watching queried movie
   * @param  {string} movieTitle Title of currently watching movie
   * @return {object} Updated user
   */
  static async findAllCurrentlyWatching(request, response) {
    const { movieTitle } = request.body;

    let users;

    try {
      users = await UserService.findAllCurrentlyWatching(movieTitle);
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully found all users!";
    return response.status(200).json({ message, users });
  }

  /**
   * GET PROFILE DATA:
   * Finds all users that are currently watching queried movie
   * @param  {string} id User ID
   * @return {object} User data (avatar, bio, currently watching, favorites, watchlist)
   */
  static async getProfileData(request, response) {
    const { id } = request.query;

    let user;

    try {
      user = await UserService.getProfileData(id);
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully recieved user data!";
    return response.status(200).json({ user });
  }

  /**
   * CREATE OR UPDATE BIO:
   * Creates or updates user bio
   * @param  {string} userId User ID
   * @param  {string} bio User bio
   * @return {object} Updated user
   */
  static async createOrUpdateBio(request, response) {
    const { userId, bio } = request.body;

    let user;

    try {
      user = await UserService.createOrUpdateBio(userId, bio);
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully updated bio!";
    return response.status(201).json({ message, user });
  }

  /**
   * CREATE OR UPDATE CURRENTLY WATCHING:
   * Creates or updates user bio
   * @param  {string} userId User ID
   * @param  {string} currentlyWatching Currently watching
   * @return {object} Updated user
   */
  static async createOrUpdateCurrentlyWatching(request, response) {
    const { userId, currentlyWatching } = request.body;

    let user;

    try {
      user = await UserService.createOrUpdateCurrentlyWatching(
        userId,
        currentlyWatching
      );
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully updated currently watching!";
    return response.status(201).json({ message, user });
  }

  /**
   * CREATE OR UPDATE FAVORITES:
   * Creates or updates user bio
   * @param  {string} userId User ID
   * @param  {array} favorites Array of [ movie, tvShow, actor, genre ] favorites
   * @return {object} Updated user
   */
  static async createOrUpdateFavorites(request, response) {
    const { userId, favorites } = request.body;

    let user;

    try {
      user = await UserService.createOrUpdateFavorites(userId, favorites);
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully updated favorites!";
    return response.status(201).json({ message, user });
  }

  /**
   * LOGIN:
   * Logins a user
   * @param  {string} username username
   * @param  {string} email email
   * @param  {string} password password
   * @return {object} Token
   */
  static async login(request, response) {
    const { username, password } = request.body;

    let user;

    try {
      user = await UserService.findUserByUsername(username);
    } catch (err) {
      return response.status(500).json(err);
    }

    if (!user) {
      message = "Incorrect email or password";
      return response.status(404).json({ message });
    }

    if (!user.validPassword(password)) {
      message = "Incorrect email or password";
      return response.status(403).json({ message });
    }

    const token = user.generateJWT();
    const message = "Successfully logged in!";
    return response.status(202).json({ message, token });
  }

  /**
   * REGISTER:
   * Creates a new user
   * @param  {string} username username
   * @param  {string} email email
   * @param  {string} password password
   * @return {object} Token
   */
  static async register(request, response) {
    const { username, email, password } = request.body;

    let user;

    try {
      user = await UserService.createUser(username, email, password);
    } catch (err) {
      console.log(err);
      return response.status(500).json(err);
    }

    const message = "Successfully registered!";
    const token = user.generateJWT();
    return response.status(201).json({ message, token });
  }

  /**
   * UPDATE AVATAR:
   * Updates avatar picture for a user
   * @param  {string} id User ID
   * @return {object} Updated user
   */
  static async updateAvatar(request, response) {
    const { userId, avatarURL } = request.body;

    let user;

    try {
      user = await UserService.updateAvatar(userId, avatarURL);
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully changed avatar!";
    return response.status(201).json({ message, user });
  }

  /**
   * UPDATE PASSWORD:
   * Updates password for a user
   * @param  {string} id User ID
   * @param  {string} password New password
   * @return {object} Updated user
   */
  static async updatePassword(request, response) {
    const { userId, password } = request.body;

    let user;

    try {
      user = await UserService.updatePassword(userId, password);
    } catch (err) {
      console.log(err);
      return response.status(500).json(err);
    }

    const message = "Successfully changed password!";
    const token = user.generateJWT();
    return response.status(201).json({ message, token });
  }

  /**
   * UPDATE USERNAME:
   * Updates username for a user
   * @param  {string} id User ID
   * @param  {string} username New username
   * @return {object} Updated user
   */
  static async updateUsername(request, response) {
    const { userId, username } = request.body;

    let user;

    try {
      user = await UserService.updateUsername(userId, username);
    } catch (err) {
      return response.status(500).json(err);
    }

    const message = "Successfully changed username!";
    return response.status(201).json({ message, user });
  }
}

module.exports = UserController;
