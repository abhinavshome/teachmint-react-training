var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Cohelo",
    rating: 4,
    price: 22,
  },
  {
    id: 2,
    title: "5 point someone",
    author: "Chetan Bhagat",
    rating: 5,
    price: 21,
  },
];

app.route("/books").get(function (req, res) {
  res.json(books);
});

app.route("/Angular").get(function (req, res) {
  res.send("Tutorial on Angular");
});

app.get("/", function (req, res) {
  res.send("Welcome to Guru99 Tutorials");
});

var server = app.listen(5000, function () {
  console.log("server started on 5000");
});
