const Profile = require("../models/Profile");

class profileController {
  static async getProfile(req, res, next) {
    try {
      const profile = await Profile.findOne({_userId: req.user.id});
      res.status(200).json(profile);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = profileController;
