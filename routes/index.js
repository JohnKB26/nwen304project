var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', function(req, res){
  res.render('index');
});

// Men
router.get('/men', function(req, res){
  res.render('men');
});

// Women
router.get('/women', function(req, res){
  res.render('women');
});

// Kid
router.get('/kid', function(req, res){
  res.render('kid');
});

module.exports = router;
