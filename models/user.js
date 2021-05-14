const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const User = require('./user')

const user = new Schema({
  userName: {type: String, unique: true, required: true},
  tier: String,
  school: String,
  totalCommits: Number,
  average: Number,
  streak: Number,
  friends: [this],
  rank: Number,
  image: { data: Buffer, contentType: String}
});

module.exports = mongoose.model('User', user);