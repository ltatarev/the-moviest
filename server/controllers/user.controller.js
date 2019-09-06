const UserService = require("../services/user.service");

class UserController {
  // ************************************************************
  // * FIND ALL CURRENTLY WATCHING
  static async findAllCurrentlyWatching(request, response) {
    let movieTitle = request.body.movieTitle;

    let users, message;

    try {
      users = await UserService.findAllCurrentlyWatching(movieTitle);
    } catch (err) {
      return response.status(500).json(err);
    }

    message = "Successfully found all users!";
    return response.status(200).json({ message, users });
  }

  // ************************************************************
  // * GET AVATAR, BIO, CURRENTLY WATCHING, FAVORITES, WATCHLISTS
  static async getProfileData(request, response) {
    let userId = request.query.id;

    let user, message;

    try {
      user = await UserService.getProfileData(userId);
    } catch (err) {
      return response.status(500).json(err);
    }

    message = "Successfully recieved user data!";
    return response.status(200).json({ user });
  }

  // ************************************************************
  // * CREATE OR UPDATE BIO
  static async createOrUpdateBio(request, response) {
    let userId = request.body.id;
    let bio = request.body.bio;

    let bioResponse, message;

    try {
      bioResponse = await UserService.createOrUpdateBio(userId, bio);
    } catch (err) {
      return response.status(500).json(err);
    }

    message = "Successfully updated bio!";
    return response.status(201).json({ message, bioResponse });
  }

  // ************************************************************
  // * CREATE OR UPDATE CURRENTLY WATCHING
  static async createOrUpdateCurrentlyWatching(request, response) {
    let userId = request.body.id;
    let currentlyWatching = request.body.currentlyWatching;

    let currentlyWatchingResponse, message;

    try {
      currentlyWatchingResponse = await UserService.createOrUpdateCurrentlyWatching(
        userId,
        currentlyWatching
      );
    } catch (err) {
      return response.status(500).json(err);
    }

    message = "Successfully logged in!";
    return response.status(201).json({ message, currentlyWatchingResponse });
  }

  // ************************************************************
  // * CREATE OR UPDATE FAVORITES
  static async createOrUpdateFavorites(request, response) {
    let userId = request.body.userId;
    let favorites = request.body.favorites;

    let favoritesResponse, message;

    try {
      favoritesResponse = await UserService.createOrUpdateFavorites(
        userId,
        favorites
      );
    } catch (err) {
      return response.status(500).json(err);
    }

    message = "Successfully updated favorites!";
    return response.status(201).json({ message, favoritesResponse });
  }

  // ************************************************************
  // * LOGIN
  static async login(request, response) {
    let username = request.body.username;
    let password = request.body.password;

    let user, token, message;

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

    token = user.generateJWT();
    message = "Successfully logged in!";
    return response.status(202).json({ message, token });
  }

  // ************************************************************
  // * REGISTER
  static async register(request, response) {
    let email = request.body.email;
    let username = request.body.username;
    let password = request.body.password;
    let user, message, token;

    // TODO: check if username or email already exist
    try {
      user = await UserService.createUser(username, email, password);
    } catch (err) {
      console.log(err);
      return response.status(500).json(err);
    }

    message = "Successfully registered!";
    token = user.generateJWT();
    return response.status(201).json({ message, token });
  }

  // ************************************************************
  // * UPDATE AVATAR
  static async updateAvatar(request, response) {
    let username = request.body.username;
    let avatarURL = request.body.avatarURL;

    let user, message;

    try {
      user = await UserService.updateAvatar(username, avatarURL);
    } catch (err) {
      return response.status(500).json(err);
    }

    message = "Successfully changed avatar!";
    return response.status(201).json({ message, user });
  }

  // ************************************************************
  // * UPDATE PASSWORD
  static async updatePassword(request, response) {
    let userId = request.body.id;
    let password = request.body.password;

    let user, message, token;

    try {
      user = await UserService.updatePassword(userId, password);
    } catch (err) {
      console.log(err);
      return response.status(500).json(err);
    }

    message = "Successfully changed password!";
    token = user.generateJWT();
    return response.status(201).json({ message, token });
  }

  // ************************************************************
  // * UPDATE USERNAME
  static async updateUsername(request, response) {
    let userId = request.body.id;
    let username = request.body.username;

    let user, message;

    try {
      user = await UserService.updateUsername(userId, username);
    } catch (err) {
      return response.status(500).json(err);
    }

    message = "Successfully changed username!";
    return response.status(201).json({ message, user });
  }
}

module.exports = UserController;
