const express = require('express');
const router = express.Router();

const Beers = require('../models/beers');





router.get('/', function(req, res, next) {
  Beers.find({}).exec((err,beers) => {
    if(err) {
      res.send('couldnt find beers')
    }
      res.end('found beers');
  })

});

router.post('/add', function(req, res, next) {
  res.end('api/beers/add');
});

module.exports = router;
