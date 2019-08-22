const UserService = require('../services/user.service');
const mongoose = require('mongoose');
const User = mongoose.model('User');


class UserController {
    static async register(req, res) {
        let email = req.body.email;
        let username = req.body.username;
        let password = req.body.password;
        let user, message, token;

        try {
            user = await UserService.createUser(username, email, password);
        } catch (err) {

            console.log(err);
            return res.status(500).json(err);
        }

        message = "Successfully registered!";
        token = user.generateJWT();
        return res.status(201).json({ message, token });

    }

    static async login(req, res) {
        let email = req.body.email;
        let password = req.body.password;

        let user, token, message;

        try {
            user = await UserService.findUserByEmail(email);
        } catch (err) {
            return res.status(500).json(err);
        }

        if (!user) {
            message = "Incorrect email or password";
            return res.status(404).json({ message });
        }

        if (!user.validPassword(password)) {
            message = "Incorrect email or password";
            return res.status(403).json({ message });
        }

        token = user.generateJWT();
        message = "Successfully logged in!";
        return res.status(202).json({ message, token });


    }
}

module.exports = UserController;