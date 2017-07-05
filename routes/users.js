var express = require('express');
var router = express.Router();
var db = require('../queries');
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
  process.nextTick(function () {
    User.findByUser(username, function(err, user){
      if(err) return done(err);

      if(user){
        console.log(user.username, user.password);
        if(user.password != '' && bcrypt.compareSync(password, user.password)) return done(null, user);
      };

      return done(null, false, {message: 'Invalid password'});
      });
  });
}));

passport.serializeUser(function(user, done){
  console.log('serializeUser: ' + user.userId);
  done(null, user.userId);
});

passport.deserializeUser(function(id, done){
  console.log('deserializeUser: ' + id);
  User.findOne(id, function(err, user){
    done(null, user);
  });
});

// Login
router.post('/login', passport.authenticate('local', {successRedirect:'/', failureRedirect:'/users/login',failureFlash: true}), function(req, res) {
  res.redirect('/');
});

// Logout
router.get('/logout', function(req, res){
  req.logout();
  //req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

// router.get('index/:all', db.getAll);

module.exports = router;
