// import stats from "stats";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
  userName: {type: String, unique: true, required: true}, // user name
  school: String, // school
  friends: [{type: String, ref: this}],
  statsId: {type: Schema.Types.ObjectId, ref: 'Stats'},
  image: { data: Buffer, contentType: String} // profile image
});

module.exports = mongoose.model('User', user);