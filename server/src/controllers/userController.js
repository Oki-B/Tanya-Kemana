const User = require("../models/User");
const { comparePass } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const Profile = require("../models/Profile");
const { OAuth2Client } = require("google-auth-library");

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

      if (user) {
        await Profile.create({
          _userId: user._id,
          name: user.username,
          profileImage: `https://ui-avatars.com/api/?name=${user.username}&background=random&color=fff`,
        });
      }

      res.status(201).json(user);
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

      console.log(email, password);
      const user = await User.findOne({ email });
      if (!user) throw { name: "InvalidInput" };
      console.log(user);
      const isValidPassword = comparePass(password, user.password);

      if (!isValidPassword) throw { name: "InvalidInput" };

      const access_token = signToken({ id: user._id });

      res.status(200).json({ access_token });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async googleLogin(req, res, next) {
    try {
      const { google_token } = req.headers;
      const client = new OAuth2Client();

      const ticket = await client.verifyIdToken({
        idToken: google_token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();

      const email = payload.email;
      const username = payload.username;

      let user  = await User
        .findOne({ email });

      if (!user) {
        user = await User.create({
          email,
          username,
          password: "googleLogin",
        }, {hooks: false});
      
        if (user) {
          await Profile.create({
            _userId: user._id,
            name: user.username,
            profileImage: `https://ui-avatars.com/api/?name=${user.username}&background=random&color=fff`,
          });
        }
      }

      const access_token = signToken({ id: user._id });

      res.status(200).json({ access_token });
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserContoller;
