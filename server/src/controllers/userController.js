const User = require("../models/User");
const { comparePass } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

class UserContoller {
  static async getUser(req, res, next) {
    try {
      const users = await User.find();

      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }

  static async userRegister(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const user = await User.create({ username, email, password });

      res.status(200).json(user);
    } catch (err) {
      // console.log(err);
      next(err);
    }
  }

  static async userLogin(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) throw { name: "EmailRequired" };
      if (!password) throw { name: "PasswordRequired" };

      const user = await User.findOne({ email });
      if (!user) throw { name: "InvalidInput" };

      const isValidPassword = comparePass(password, user.password);

      if (!isValidPassword) throw { name: "InvalidInput" };

      const access_token = signToken({ id: user._id });

      res.status(200).json({ access_token });
    } catch (err) {
        console.log(err)
      next(err);
    }
  }
}

module.exports = UserContoller;
