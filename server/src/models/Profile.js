const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
    {
        _userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        },
        name: {
        type: String,
        required: [true, "Please provide a name"],
        },
        profileImage: {
        type: String,
        required: [true, "Please provide a profile image"],
        },
        bio: {
        type: String,
        },
    },
    { timestamps: true }
    );

module.exports = mongoose.model("Profile", profileSchema);