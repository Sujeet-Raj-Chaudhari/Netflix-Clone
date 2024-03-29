const mongoose = require("mongoose");

//Defining schema for database on mongoDB
const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSmall: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    age_limit: { type: Number },
    genre: { type: String },

    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
