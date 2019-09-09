const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const methods = require("./plugins/methods.js");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username required"],
      unique: true,
      lowercase: true,
      minlength: 3,
      maxlength: 15,
      match: [/^[a-zA-Z0-9]+$/, "Username is invalid"],
      index: true
    },
    email: {
      type: String,
      minlength: 6,
      required: [true, "E-mail required"],
      unique: true,
      index: true
    },
    hash: String,
    salt: String,
    avatarURL: { type: String, default: "../../../assets/img/avatars/01.png" },
    bio: { type: String, default: "", maxlength: 250 },
    currentlyWatching: { type: String, default: "Not watching anything 😔" },
    favorites: {
      movie: { type: String, default: "" },
      tvShow: { type: String, default: "" },
      actor: { type: String, default: "" },
      genre: { type: String, default: "" }
    }
  },
  { timestamps: true }
);

// plugin methods
userSchema.plugin(methods);

// plugin unique validation
userSchema.plugin(mongooseUniqueValidator);

var User = mongoose.model("User", userSchema, "User");

// make this available to our users in our applications
module.exports = User;
