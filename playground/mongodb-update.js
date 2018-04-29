const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Couldn't connect to the database.");
  }
  console.log("Connected to MongoDB server");

  // db
  //   .collection("Todos")
  //   .findOneAndUpdate(
  //     {
  //       _id: new ObjectID("5ae57a2013e912220a89c379")
  //     },
  //     {
  //       $set: {
  //         completed: true
  //       }
  //     },
  //     {
  //       returnOriginal: false
  //     }
  //   )
  //   .then(result => {
  //     console.log(result);
  //   });

  db
    .collection("Users")
    .findOneAndUpdate(
      {
        _id: new ObjectID("5ae57b59fc58842312228d65")
      },
      {
        $set: {
          name: "selin"
        },
        $inc: {
          age: 1
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });

  //db.close();
});
