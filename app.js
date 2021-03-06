var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

const mongoose = require('mongoose');
const dburl = process.env.MONGODB_URI || "mongodb://localhost:27017/database";

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require('passport-jwt').ExtractJwt;

var index = require('./routes/index');
var users = require('./routes/users');
var polls = require('./routes/polls');
var beers = require('./routes/beers')

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(session({ secret: 'costa Rica'}));
app.use(passport.initialize());
//app.use(passport.session())
//app.use(express.static(path.join(__dirname, 'public')));


var User = require('./models/users');
passport.use(new JwtStrategy(
  {secretOrKey: 'Costa Rica',
   jwtFromRequest: ExtractJwt.fromBodyField('token') },
   (jwt_payload, done) => {
     console.log('jwt_payload',jwt_payload)
    //  const verifiedUser = JSON.parse(jwt_payload);
    //  console.log(verifiedUser)
     User.findOne({username: jwt_payload.user.username}, function(err, user) {
    if (err) {
        console.log('verify user error', err)
        return done(err, false);
    }
    if (user) {
      console.log('verify user found', user)
        return done(null, user);
    } else {
        console.log('verify user no user found')
        return done(null, false);
    }
});
}));
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// connect to mongodb database
mongoose.connect(dburl, {useMongoClient: true}, (err) => {
  if (err) throw err;
})

app.use('/', index);
app.use('/api/users', users);
app.use('/api/polls', polls);
app.use('/api/beers', beers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.end('error');
});

module.exports = app;
