const mongoose = require('mongoose');
const User = mongoose.model('User');

class UserService {
    static async createUser(username, email, password) {
        let user = new User({ email, username });
        user.setPassword(password);
        user.setGravatar(email);

        await user.save();
        return user;
    }

    static async findUserByEmail(email) {
        return await User.findOne({ email }).exec();
    }
}

module.exports = UserService;