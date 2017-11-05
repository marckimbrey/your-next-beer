var express = require('express');
var router = express.Router();

const Poll = require('../models/polls');


// get all polls
router.get('/', (req, res) => {
  Poll.find({}).exec((err, polls) => {
    if (err) res.end('error retrieving polls')
    res.json(polls)
  });
  //res.end('api/polls');
});

// get single poll
router.get('/:id', (req, res) => {
  Poll.findOne({_id: req.params.id}).exec((err, polls) => {
    if (err) res.end('error retrieving polls')
    res.json(polls)
  });
  //res.end('api/polls');
});

// add to polls
router.post('/add', (req, res) => {
  const newPoll = new Poll(req.body);
  //console.log(newPoll)
  newPoll.save((err, poll) => {
    if (err) console.log('error saving to database', err);
    console.log(poll)
    res.json(poll);
  })
  //res.end('api/polls/add');
});

// update votes on polls
router.put('/vote', (req, res) => {

  Poll.findOne({_id: req.body._id}, (err, poll) => {
    if (err) res.end(err)
    poll.beers.forEach((beer, i) => {
      console.log(beer.votes)
      beer.votes = req.body.beers[i].votes;
    })
    poll.save((err, updatedPoll) => {
      res.json(updatedPoll)
    })
  })
})

module.exports = router;
