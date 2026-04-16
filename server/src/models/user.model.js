// Importing the mongoose library to define the schema and model for the user collection in MongoDB.

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin", "staff"],
    default: "user",
  },
}, { timestamps: true }      // Automatically add createdAt and updatedAt fields to the schema
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
