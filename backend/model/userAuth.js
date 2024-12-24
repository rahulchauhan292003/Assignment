const mongoose = require("mongoose");

const UserAuth = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    dateofbirth: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("user", UserAuth);
