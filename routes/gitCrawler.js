const axios = require('axios');
const cheerio = require('cheerio');
var request = require('request');
var express = require('express');
var router = express.Router();

// 잔디에서 커밋 데이터 크롤링
router.get('/', function(req, res) {
    var userName = req.body.userName;
    const homeUrl = 'https://github.com/'.concat(userName);
        request(homeUrl, function(err, res, html) {
        if(err)
        {
            console.log("error");
            res.status = 400;
        }
        else
        {
            const $ = cheerio.load(html);
            var crawledCommits = [];
            var data;
            var commit;

            $(".js-calendar-graph > svg > g > g > rect.ContributionCalendar-day").each(function(){
                commit = { 'date': '', 'count': 0, 'color': 0 };
                data = $(this);

                commit['date'] = data['0']['attribs']['data-date'];
                commit['count'] = data['0']['attribs']['data-count'];
                commit['color'] = data['0']['attribs']['data-level'];

                crawledCommits.push(commit);
            });
            if(!crawledCommits)
            {
                res.status(404).json("not found");
            }
            else 
            {
                console.log(crawledCommits);
                res.send(crawledCommits);
            }
            // console.log(data);
        } 
    })
});

module.exports = router;