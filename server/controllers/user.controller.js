const UserService = require('../services/user.service');

class UserController {
    // * REGISTER
    static async register(request, response) {
        let email = request.body.email;
        let username = request.body.username;
        let password = request.body.password;
        let user, message, token;

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


    // * CHANGE USERNAME
    static async updateUsername(request, response) {
        let username = request.body.username;
        let newUsername = request.body.newUsername;

        let user, message;

        try {
            user = await UserService.updateUsername(username, newUsername);
        } catch (err) {
            return response.status(500).json(err);
        }

        message = "Successfully changed username!";
        return response.status(201).json({ message, user });
    }

    // * CHANGE PASSWORD
    static async updatePassword(request, response) {
        let username = request.body.username;
        let password = request.body.password;

        let user, message, token;

        try {
            user = await UserService.updatePassword(username, password);
        } catch (err) {
            console.log(err);
            return response.status(500).json(err);
        }

        message = "Successfully changed password!";
        token = user.generateJWT();
        return response.status(201).json({ message, token });
    }

    // * GET AVATAR, BIO, CURRENTLY WATCHING, FAVORITES, WATCHLISTS
    static async getProfileData(request, response) {
        let username = request.body.username;

        let userResponse, message;

        try {
            userResponse = await UserService.getProfileData(username);
        } catch (err) {
            return response.status(500).json(err);
        }

        message = "Successfully recieved user data!";
        return response.status(200).json({ userResponse });
    }

    // * CREATE OR UPDATE BIO
    static async createOrUpdateBio(request, response) {
        let username = request.body.username;
        let bio = request.body.bio;

        let bioResponse, message;

        try {
            bioResponse = await UserService.createOrUpdateBio(username, bio);
        } catch (err) {
            return response.status(500).json(err);
        }

        message = "Successfully updated bio!";
        return response.status(201).json({ message, bioResponse });
    }

    // * CREATE OR UPDATE CURRENTLY WATCHING
    static async createOrUpdateCurrentlyWatching(request, response) {
        let username = request.body.username;
        let currentlyWatching = request.body.currentlyWatching;

        let currentlyWatchingResponse, message;

        try {
            currentlyWatchingResponse = await UserService.createOrUpdateCurrentlyWatching(username, currentlyWatching);
        } catch (err) {
            return response.status(500).json(err);
        }

        message = "Successfully logged in!";
        return response.status(201).json({ message, currentlyWatchingResponse });
    }

    // * CREATE OR UPDATE FAVORITES
    static async createOrUpdateFavorites(request, response) {
        let username = request.body.username;
        let { movie, tvShow, actor, genre } = request.body.favorites;

        let favoritesResponse, message;

        try {
            favoritesResponse = await UserService.createOrUpdateFavorites(username, movie, tvShow, actor, genre);
        } catch (err) {
            return response.status(500).json(err);
        }

        message = "Successfully updated favorites!";
        return response.status(201).json({ message, favoritesResponse });
    }
}

module.exports = UserController;