var pg = require('pg');
// Local Host
// var connectionString = 'postgres://barrenjohn:qwerty@localhost:5432/barrenjohn_jdbc';
// Heroku
var connectionString = "postgres://wgvywhmjcvptml:84a6ec065e25a8df99f198c46a28e32a59e4a96534d27716d1f16db15ae586ec@ec2-54-221-254-72.compute-1.amazonaws.com:5432/d28gaom4seaj3f";

function getAll(req, res, next){
  var client = new pg.Client(connectionString);
  client.connect();

  var result = [];
  var query = client.query("SELECT * FROM collections");

  query.on('rows', function (rows) {
    result.push(rows);
  });

  query.on('end', function () {
    client.end();
    res.json(result);
  });
}

module.exports = {
  connectionString: connectionString,
  getAll : getAll
};
