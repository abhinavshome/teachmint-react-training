var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "test",
  database: "books_db",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to db!");
});

module.exports = con.promise();
