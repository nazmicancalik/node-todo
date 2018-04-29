const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Couldn't connect to the database.");
  }
  console.log("Connected to MongoDB server");

  // The part where we fetch.
  //
  // db
  //   .collection("Todos")
  //   .find({ completed: false }) // Only query the not finished ones.
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log("Todos");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     error => {
  //       console.log("Unable to fetch todos", error);
  //     }
  //   );

  // ********************
  //
  // db
  //   .collection("Todos")
  //   .find({
  //     _id: new ObjectID("5ae57a2013e912220a89c379")
  //   })
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log("Todos");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     error => {
  //       console.log("Unable to fetch todos", error);
  //     }
  //   );
  //

  // db
  //   .collection("Todos")
  //   .find()
  //   .count()
  //   .then(
  //     count => {
  //       console.log("Todos count", count);
  //     },
  //     error => {
  //       console.log("Unable to fetch todos", error);
  //     }
  //   );

  // QUIZ

  db
    .collection("Users")
    .find({ name: "nomad" })
    .toArray()
    .then(
      docs => {
        console.log("Users with the name nomad");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      error => {
        console.log("Unable to fetch users", error);
      }
    );
  //db.close();
});
