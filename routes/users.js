var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('api/users');
});

router.post('/register', function(req, res) {
  console.log('past passport validation')
  var newUser = new User({ username : req.body.username, email: req.body.email, password: req.body.password})
    User.register(newUser, req.body.password, function(err, user) {
        if (err) {
            //return res.render('register', { account : account });
            console.log('failed to register user');
        }
        res.end()
        // passport.authenticate('local')(req, res, function () {
        //
        //     res.end('registered user')
        // });
    });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  console.log('past auth', req.session)
    res.end();
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
