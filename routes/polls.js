var express = require('express');
var router = express.Router();


// get all polls
router.get('/', function(req, res, next) {
  res.end('api/polls');
});

// add to polls
router.post('/add', function(req, res, next) {
  res.end('api/polls/add');
});

module.exports = router;
