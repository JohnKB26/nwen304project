var pg = require('pg');
var db = require('../queries');
var client;

function connectDB(){
  client = new pg.Client(db.connectionString);
  // client.on('drain', client.end.bind(client));
  client.connect();
}

function User(){
  this.username = '';
  this.password = '';

  this.save = function (callback){
    connectDB();
    console.log('Saving new user');
    client.query('INSERT INTO users(username, password) VALUES($1, $2);', [this.username, this.password], function (err, result){
      if(err) return callback(err, null) // Failed to insert
    });

  }
}

User.findByUser = function(username, callback){
  connectDB();
  console.log('Finding user by username');

  client.query("SELECT * FROM users WHERE username=$1;", [email], function(err, result){
    if(err) return callback(err, null);

    if(result.rows.length > 0)return callback(err, buildUser(result));

    return callback(null, null);
  });
}

function buildUser(result){
  var newUser = new User();
  newUser.username = result.rows[0].username;
  newUser.password = result.rows[0].password;
  return newUser;
}

module.exports = User;
