const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Couldn't connect to the database.");
  }
  console.log("Connected to MongoDB server");

  // delete many

  // db
  //   .collection("Todos")
  //   .deleteMany({ text: "sleep" })
  //   .then(result => {
  //     console.log(result);
  //   });

  // delete one

  // db
  //   .collection("Todos")
  //   .deleteOne({ text: "sleep" })
  //   .then(result => {
  //     console.log(result);
  //   });

  // findOneAndDelete

  db
    .collection("Todos")
    .findOneAndDelete({ _id: new ObjectID("id text here") })
    .then(result => {
      console.log(result);
    });
  //db.close();
});
