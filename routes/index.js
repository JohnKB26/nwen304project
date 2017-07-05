var express = require('express');
var router = express.Router();
var User = require('../models/user');
var pg = require('pg');
var db = require('../queries');
var client;

function connectDB(){
  client = new pg.Client(db.connectionString);
  client.on('drain', client.end.bind(client));
  client.connect();
}

// Get Homepage
router.get('/', function(req, res){
  res.render('index');
});

// Men
router.get('/men', function(req, res){
  res.render('men');
});

// Testing database connection
// router.get('/find', User.getStuff);

// Women
router.get('/women', function(req, res){
  res.render('women');
});

// Kid
router.get('/kid', function(req, res){
  res.render('kid');
});

function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  else{
    req.flash('error_msg', 'You are not logged in');
    res.redirect('/users/login');
  }
}

module.exports = router;
