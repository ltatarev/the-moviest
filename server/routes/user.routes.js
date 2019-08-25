const express = require('express');
let router = express.Router();

const UserController = require('../controllers/user.controller');

router.route("/register")
    .post(UserController.register);

router.route("/login")
    .post(UserController.login);

router.route("/updateUsername")
    .post(UserController.updateUsername);

router.route("/updatePassword")
    .post(UserController.updatePassword);

router.route("/updateAvatar")
    .post(UserController.updateAvatar);

router.route("/getProfileData")
    .get(UserController.getProfileData);

router.route("/findAllCurrentlyWatching")
    .get(UserController.findAllCurrentlyWatching);

router.route("/createOrUpdateBio")
    .post(UserController.createOrUpdateBio);

router.route("/createOrUpdateCurrentlyWatching")
    .post(UserController.createOrUpdateCurrentlyWatching);

router.route("/createOrUpdateFavorites")
    .post(UserController.createOrUpdateFavorites);

module.exports = router;