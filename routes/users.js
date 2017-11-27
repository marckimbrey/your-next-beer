var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/users');
var jwt = require('jsonwebtoken')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('api/users');
});

router.post('/register', function(req, res) {
  console.log('password',req.body.password)
  var newUser = new User({ username : req.body.username, email: req.body.email});

    //passport local mongoose function salts and hashes password
    User.register(newUser, req.body.password, function(err) {
        if (err) {
          console.log('error while user register!', err);
          res.json({error: true, message: 'email is already taken'})

        } else {
          // create jwt
          var token = jwt.sign({user: newUser.username }, 'Costa Rica')
          res.json({username: newUser.username, token: token});
        }
    });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  // create jwt
  var token = jwt.sign({user: req.body.username }, 'Costa Rica')
  res.json({username: req.body.username, token: token});
});

router.get('/logout', function(req, res) {
    if (req.session) {
      req.logout()
      res.end()
    } else {
      res.end('no user logged in')
    }
});

module.exports = router;
