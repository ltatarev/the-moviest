import { getEnvString } from '@lib/env';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { Schema } from 'mongoose';

const secret = getEnvString('JWT_SECRET');

function userPlugin(userSchema: Schema) {
  userSchema.methods.setPassword = function (password: string) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto
      .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
      .toString('hex');
  };

  userSchema.methods.validPassword = function (password: string) {
    const hash = crypto
      .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
      .toString('hex');
    return this.hash == hash;
  };

  userSchema.methods.generateJWT = function () {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign(
      {
        _id: this._id,
        avatarURL: this.avatarURL,
        exp: Math.trunc(expiry.getTime() / 1000),
      },
      secret
    );
  };
}

export default userPlugin;
