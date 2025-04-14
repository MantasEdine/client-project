const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  rank: {
    type: String,
    enum: ["Or", "Argent", "Bronze", "None"], // allowed values
    default: "None", // default when user is created
  },
});

module.exports = Product = mongoose.model("contact", ContactSchema);
