// sets up MySQL connection
var mysql = require("mysql");

// Heroku jawsdb_url
if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
  var connection = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "root",
  database: "burgers_db"
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
