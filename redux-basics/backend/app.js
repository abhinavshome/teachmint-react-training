var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var db = require("./db");

app.route("/books").get(async (req, res) => {
  const books = await db.execute("select * from books");
  return res.json(books[0]);
});

app.route("/books").post(async (req, res) => {
  const { title, author, price, rating } = req.body;
  const qeuryRes = await db.execute(
    `insert into books (title, author, price, rating) value ('${title}', '${author}', ${price}, ${rating})`
  );
  return res.send({ insertedId: qeuryRes[0].insertId });
});

app.route("/users/register").post(async (req, res) => {
  const { username, password } = req.body;
  const qeuryRes = await db.execute(
    `insert into users (username, password) values ('${username}', '${password}')`
  );
  return res.send({ message: "user created successfully" });
});

app.route("/users/login").post(async (req, res) => {
  const { username, password } = req.body;
  const updateQueryRes = await db.execute(
    `update users set token = ${Date.now()} where username = '${username}' and password = '${password}'`
  );

  if (updateQueryRes[0].changedRows === 0) {
    return res.status(404).send({ message: "User not found" });
  }

  const queryRes = await db.execute(
    `select * from users where username = '${username}' and password = '${password}'`
  );

  return res.send(queryRes[0][0]);
});

app.get("/", function (req, res) {
  res.send("Welcome to bookscart backend");
});

var server = app.listen(3300, function () {
  console.log("server started on 3300");
});
