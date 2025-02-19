const mongoose = require("mongoose");
const {hashPass} = require('../helpers/bcrypt')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: [true, "Username already exists"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: [true, "Email already exists"],
      match: [/.+\@.+\..+/, "Format email tidak valid"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: [6, "Password minimal 6 karakter"],
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
