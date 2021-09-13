const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stats = new Schema({
  tier: String, // tier by number of commits
  totalCommits: Number, // commits for a year
  average: Number,  // totalCommits/365
  streak: Number, // consecutive days
  rank: Number, // rank of shcool
});

module.exports = mongoose.model('Stats', stats);