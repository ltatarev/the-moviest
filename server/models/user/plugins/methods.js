const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../../../utils/jwt').secret;

module.exports = function(userSchema) {
    userSchema.methods.setPassword = function(password) {
        this.salt = crypto.randomBytes(16).toString("hex");
        this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString("hex");
    };

    userSchema.methods.validPassword = function(password) {
        let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString("hex");
        return this.hash == hash;
    };

    userSchema.methods.generateJWT = function() {
        let expiry = new Date();
        expiry.setDate(expiry.getDate() + 7);

        return jwt.sign({
            _id: this._id,
            avatarURL: this.avatarURL,
            exp: Math.trunc(expiry.getTime() / 1000)
        }, secret);
    };
}