const mongoose = require("mongoose");

const cvSchema = new mongoose.Schema({
  name: String,
  role: String,
  skills: [String],
});

module.exports = mongoose.model("Cv", cvSchema, "profile");
