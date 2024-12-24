const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("userInfo", User);
