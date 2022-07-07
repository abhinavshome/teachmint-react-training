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
  console.log(books[0]);
  return res.json(books[0]);
});

app.route("/books").post(async (req, res) => {
  const { title, author, price, rating } = req.body;
  const qeuryRes = await db.execute(
    `insert into books (title, author, price, rating) value ('${title}', '${author}', ${price}, ${rating})`
  );
  console.log(qeuryRes);
  return res.send({ insertedId: qeuryRes[0].insertId });
});

app.get("/", function (req, res) {
  res.send("Welcome to bookscart backend");
});

var server = app.listen(5000, function () {
  console.log("server started on 5000");
});
