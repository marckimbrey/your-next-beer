var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/users');
//var jwt = require('jsonwebtoken')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('api/users');
});

router.post('/register', function(req, res) {
  console.log('password',req.body.password)
  var newUser = new User({ username : req.body.username, email: req.body.email});
    // check username is unique
    // User.findOne({ username: req.body.username}).exec((err, user) => {
    //   if (err)  console.log(err)
    //   if (user) res.json({error: true, message: 'username is already taken'});
    // });
    // check email is unique
    // User.findOne({ email: req.body.email}).exec((err, user) => {
    //   if (err) console.log(err)
    //   if (user)  res.json({error: true, message: 'email is already taken'});
    //
    // });
    //passport local mongoose function salts and hashes password
    User.register(newUser, req.body.password, function(err) {
        if (err) {
          console.log('error while user register!', err);
          res.json({error: true, message: 'email is already taken'})

        } else {
          res.json(newUser)
        }
    });


});

router.post('/login', passport.authenticate('local'), function(req, res) {
  console.log('past auth', req.session)
    res.json({user: req.session});
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
