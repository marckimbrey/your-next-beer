const express = require('express');
var router = express.Router();

const Beer = require('../models/beers');





router.get('/', function(req, res, next) {
  Beer.find({}).exec((err,beers) => {
    if(err) {
      res.send('couldnt find beers')
    }
      res.json(beers);
  })

});

router.post('/add', function(req, res) {
  console.log('request',req.body)
  let newBeer = new Beer({
    name: req.body.name,
    country: req.body.country,
    brewery:req.body.brewery,
    style: req.body.style,
    strength: req.body.strength
  });
  newBeer.save((err, beer) => {
    if (err) {
      console.log('error saving to database');
      res.json(beer);
    }
    res.json(beer);
  })

});

module.exports = router;
