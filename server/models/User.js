const mongoose = require("mongoose");

//Defining schema for database on mongoDB
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

module.exports = mongoose.model("User", UserSchema);
