// models/Post.js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  tags: [String],
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Post", postSchema);
