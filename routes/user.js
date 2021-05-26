var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.post('/', (req, res) => {
    try{
        const userName = req.body.userName;
        if(!userName) throw Error('username required');
        User.findOne({userName: userName}, (err, user) => {
            if(user) res.status(400).send("user already exists")
        })

        const newUser = new User({
            userName: userName,
            friends: []
        })
        newUser.save((err) => {
            if(err) throw new Error()
            else return res.status(201).send(newUser)
        })
    } catch(e){
        res.status(500).send(e)
    }
})

router.put('/username/:userName', (req, res) => {
    try{
        const filter = {userName: res.params.userName};
        User.findOne(filter, (err, user) => {
            if(!user) res.status(404).send("user not found")
        })

        var userName, tier, school, totalCommits, average, streak;
        if(req.body.userName) userName = req.body.userName
        if(req.body.tier) tier = req.body.tier
        if(req.body.school) school = req.body.school
        if(req.body.totalCommits) totalCommits = req.body.totalCommits
        if(req.body.average) average = req.body.average
        if(req.body.streak) streak = req.body.streak
        const updateData = {
            userName: userName,
            tier: tier,
            school: school,
            totalCommits : totalCommits,
            average: average,
            streak: streak
        }
        const user = User.findOneAndUpdate(filter, updateData, {
            new: true //return after update was applied
        }, (err) => {
            if(err) throw new Error()
            else res.status(200).send(user)
        });
    }catch(e){
        res.status(500).send(e)
    }
})

router.delete('/username/:username', (req, res) => {
    const filter = {userName: req.params.userName}
    User.findOneAndDelete(filter,(err, user) => {
        if(err) res.status(400)
        if(!user) res.status(404).send("user not found")
        else res.status(200).send(user)
    });
})

//add a new friend

module.exports = router;