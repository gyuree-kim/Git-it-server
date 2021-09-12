const express = require('express');

const router = express.Router();

const GitCrawler = require('./gitCrawler'); 

const User = require('./user');


router.use('/git-crawler', GitCrawler); //router.use({api url}, {var name})

router.use('/user', User);

router.get('/', function(req, res, next) {
    res.send('hello world!')
});

module.exports = router;