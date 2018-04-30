const express = require("express");
const bodyParser = require("body-parser");

let { mongoose } = require("./db/mongoose");
let { Todo } = require("./models/todo");
let { User } = require("./models/user");

let app = express();

// ** Middlewares **
app.use(bodyParser.json());

// ** Routes **
app.post("/todos", (req, res) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("Started on port 3000");
});
