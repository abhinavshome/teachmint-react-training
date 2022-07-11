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

app.route("/orders").get(async (req, res) => {
  //find the user
  const token = req.headers.authtoken;
  let queryRes = await db.execute(
    `select * from users where token = '${token}'`
  );
  if (queryRes[0].length === 0) {
    return res
      .status(404)
      .send({ message: "You should be logged in to perform this action" });
  }
  const userId = queryRes[0][0].id;

  queryRes = await db.execute(`select * from orders where user_id=${userId}`);
  return res.json(queryRes[0]);
});

app.route("/books").post(async (req, res) => {
  //find the user
  const token = req.headers.authtoken;
  let queryRes = await db.execute(
    `select * from users where token = '${token}'`
  );
  if (queryRes[0].length === 0) {
    return res
      .status(404)
      .send({ message: "You should be logged in to perform this action" });
  }

  if (queryRes[0][0].username !== "admin") {
    return res.status(403).send({ message: "Only admin can do it" });
  }

  const { title, author, price, rating } = req.body;
  queryRes = await db.execute(
    `insert into books (title, author, price, rating) value ('${title}', '${author}', ${price}, ${rating})`
  );
  return res.send({ insertedId: queryRes[0].insertId });
});

app.route("/users/register").post(async (req, res) => {
  const { username, password } = req.body;
  const qeuryRes = await db.execute(
    `insert into users (username, password) values ('${username}', '${password}')`
  );
  return res.send({ message: "user created successfully" });
});

app.route("/place-order").post(async (req, res) => {
  //find the user
  const token = req.headers.authtoken;
  let queryRes = await db.execute(
    `select * from users where token = '${token}'`
  );
  if (queryRes[0].length === 0) {
    return res
      .status(404)
      .send({ message: "You should be logged in to perform this action" });
  }

  const userId = queryRes[0][0].id;
  const cart = req.body;

  queryRes = await db.execute(
    `insert into orders values(null, '${userId}', '${JSON.stringify(cart)}')`
  );
  return res.send({
    message: `Order placed successfully with order id: ${queryRes[0].insertId}`,
  });
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

app.get("/users/logout", async (req, res) => {
  const token = req.headers.authtoken;
  console.log(token);
  const queryRes = await db.execute(
    `update users set token = NULL where token = '${token}'`
  );

  console.log(queryRes);
  if (queryRes[0].changedRows === 0) {
    return res.status(404).send({ message: "User not found" });
  }

  return res.send({ message: "Logged out succefully" });
});

app.get("/", function (req, res) {
  res.send("Welcome to bookscart backend");
});

var server = app.listen(3300, function () {
  console.log("server started on 3300");
});
