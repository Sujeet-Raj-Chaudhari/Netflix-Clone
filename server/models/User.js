const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, rquired: true, unique: true },
    password: { type: String, default: " " },
    profilePic: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.export = mongoose.model("User", UserSchema);
