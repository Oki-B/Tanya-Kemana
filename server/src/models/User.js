const mongoose = require("mongoose");
const {hashPass} = require('../helpers/bcrypt')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: [true, "username already exists"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: [true, "email already exists"],
      match: [/.+\@.+\..+/, "Format email tidak valid"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: [6, "password must have at least 6 characters"],
    },
  },
  { timestamps: true }
);

// **🔥 Hooks untuk Hash Password Sebelum Save**
userSchema.pre("save", async function (next) {
    // Jika password tidak berubah, lanjutkan tanpa hash ulang
    if (!this.isModified("password")) return next();
  
    try {
      this.password = hashPass(this.password);
      next();
    } catch (err) {
      next(err);
    }
  });

module.exports = mongoose.model("User", userSchema);
