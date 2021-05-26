const express = require('express');
const router = express.Router();

const gitCrawler = require('./gitCrawler'); 
const user = require('./user');

router.use('/git-crawler', gitCrawler); 
router.use('/users', user); 

router.get('/', function(req, res, next) {
    res.send('hello world!')
});

module.exports = router;