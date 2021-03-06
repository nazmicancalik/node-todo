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
  let todo = new Todo({
    text: req.body.text
  });

  todo.save(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.listen(3000, () => {
  console.log("Started on port 3000");
});

module.exports = {
  app
};
