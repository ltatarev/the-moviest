import mongooseUniqueValidator from 'mongoose-unique-validator';
import mongoose from 'mongoose';
import userPlugin from '../plugins/userPlugin';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username required'],
      unique: true,
      lowercase: true,
      minlength: 3,
      maxlength: 15,
      match: [/^[a-zA-Z0-9]+$/, 'Username is invalid'],
      index: true,
    },
    email: {
      type: String,
      minlength: 6,
      required: [true, 'E-mail required'],
      unique: true,
    },
    hash: String,
    salt: String,
    avatarURL: { type: String, default: '' },
    bio: { type: String, default: '', maxlength: 250 },
    currentlyWatching: { type: String, default: 'Not watching anything 😔' },
    favorites: {
      movie: { type: String, default: '' },
      tvShow: { type: String, default: '' },
      actor: { type: String, default: '' },
      genre: { type: String, default: '' },
    },
  },
  { timestamps: true }
);

// plugin methods
userSchema.plugin(userPlugin);

// plugin unique validation
userSchema.plugin(mongooseUniqueValidator);

const User = mongoose.models.User || mongoose.model('User', userSchema, 'User');

export default User;
