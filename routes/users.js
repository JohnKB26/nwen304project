var express = require('express');
var router = express.Router();
// User model
var User = require('../models/user');
// Use for password hash
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Register
router.get('/register', function(req, res){
  res.render('register');
});

// Login
router.get('/login', function(req, res){
  res.render('login');
});

// Register user
router.post('/register', function(req, res){
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;

  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  var errors = req.validationErrors();

  if(errors){
    res.render('register',{
      errors:errors
    });
  }
  else{
    var newUser = new User();
    newUser.username = username;
    newUser.password = bcrypt.hashSync(password, null, null);

    newUser.save(function(err){
      if(err)throw err;
      console.log(user);
      return done(err, newUser);
    });
    req.flash('success_msg', 'Success create account!');
    res.redirect('/users/login');
  }
});

passport.use(new LocalStrategy(function(username, password, done){
  User.getUserByUsername(username, function(err, user){
    if(err) throw err;
    if(!user){
      return done(null, false, {message: 'Unkown User'});
    }

    User.comparePassword(password, user.password, function(err, isMatch){
      if(err) throw err;
      if(isMatch){
        return done(null, user);
      }
      else{
        return done(null, false, {message: 'Invalid password'});
      }
    });
  });
}));

router.post('/login', passport.authenticate('local', {successRedirect:'/', failureRedirect:'/users/login',failureFlash: true}), function(req, res) {
  res.redirect('/');
});

module.exports = router;
