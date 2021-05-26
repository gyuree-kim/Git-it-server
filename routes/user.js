var express = require('express');
var router = express.Router();

const User = require('../models/user.js');

// get all users
router.get('/', (req, res) => {
  const filter = {};
  User.find(filter, (err, userList) => {
    if(err) res.status(400).json({msg: `get all users error`});
    if(!userList) res.status(404).json({msg: `users not found`});
    else {
      console.log('find userList 성공');
      return res.status(200).json({userList});
    }
  })
})

// get a user by userName
router.get('/userName/:userName', (req, res) => {
  User.findOne({userName: req.params.userName}, (err, user) => {
    if(err) res.status(500).json({error: `db failure`});
    if(!user) res.status(404).json({msg: `user not found`});
    else {
      console.log('findOne by userName 성공');
      return res.status(200).json(user);
    }
  })
})

// get friends by userName
router.get('/userName/:userName/friends', (req, res) => {
  // const id = req.params.userName.$oid;
  const filter = {userName: req.params.userName};
  User.find(filter).select('friends').exec((err, friendList) => {
    if(err) res.status(400).json({msg: `get friends error`});
    if(!friendList) res.status(404).json({msg: `freind not found`});
    else {
      console.log('getFreinds by userName 성공');
      return res.status(200).json({friendList});
    }
  })
})

module.exports = router;