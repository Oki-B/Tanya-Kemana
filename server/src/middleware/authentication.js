const { verifyToken } = require("../helpers/jwt");
const User = require("../models/User");

async function authentication(req, res, next) {
  try {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
      throw { name: "Unauthenticated" };
    }

    const token = bearerToken.split(" ")[1];

    const payload = verifyToken(token);
    const user = await User.findById(payload.id);

    if (!user) {
      throw { name: "Unauthenticated" };
    }

    req.user = { id: user.id };

    next();
  } catch (err) {
    next(err);
  }
}

module.exports = { authentication };
