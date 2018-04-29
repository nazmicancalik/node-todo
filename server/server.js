const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

let Todo = mongoose.model("Todo", {
  text: { type: String },
  completed: { type: Boolean },
  completedAt: { type: Number }
});

// let newTodo = new Todo({
//   text: "Cook Dinner"
// });
//
// newTodo.save().then(
//   doc => {
//     console.log("Saved todo", doc);
//   },
//   e => {
//     console.log("Unable to save the todo", e);
//   }
// );

let secondTodo = new Todo({
  text: "Solve Math",
  completed: true,
  completedAt: 123
});

secondTodo.save().then(
  doc => {
    console.log("Saved todo", doc);
  },
  e => {
    console.log("Unable to add to do", e);
  }
);
