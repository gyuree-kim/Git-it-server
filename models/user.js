const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
  userName: {type: String, unique: true, required: true}, // user name
  tier: String, // tier by number of commits
  school: String, // school
  totalCommits: Number, // commits for a year
  average: Number,  // totalCommits/365
  streak: Number, // consecutive days
  friends: [this],
  rank: Number, // rank of shcool
  image: { data: Buffer, contentType: String} // profile image
});

module.exports = mongoose.model('User', user);