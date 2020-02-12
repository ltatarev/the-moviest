const express = require("express");
let router = express.Router();

const UserController = require("../controllers/user.controller");

// GET
router.route("/findUserByUsername").get(UserController.findUserByUsername);

router
  .route("/findAllCurrentlyWatching")
  .get(UserController.findAllCurrentlyWatching);

router.route("/getProfileData").get(UserController.getProfileData);

// POST
router.route("/createOrUpdateBio").post(UserController.createOrUpdateBio);

router
  .route("/createOrUpdateCurrentlyWatching")
  .post(UserController.createOrUpdateCurrentlyWatching);

router
  .route("/createOrUpdateFavorites")
  .post(UserController.createOrUpdateFavorites);

router.route("/login").post(UserController.login);

router.route("/register").post(UserController.register);

router.route("/updateAvatar").post(UserController.updateAvatar);

router.route("/updatePassword").post(UserController.updatePassword);

router.route("/updateUsername").post(UserController.updateUsername);

module.exports = router;
