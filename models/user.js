const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
  userName: {type: String, unique: true, required: true},
  tier: {type: String},
  school: {type: String},
  totalCommits: {type: Number},
  average: {type: Number},
  streak: {type: Number},
  friends: [{type: user}]
});

module.exports = mongoose.model('user', user);