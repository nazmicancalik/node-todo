const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Couldn't connect to the database.");
  }
  console.log("Connected to MongoDB server");

  // db.collection("Todos").insertOne(
  //   {
  //     text: "Something to do",
  //     completed: false
  //   },
  //   (err, res) => {
  //     if (err) {
  //       return console.log("Unable to insert to do", err);
  //     }
  //
  //     console.log(JSON.stringify(res.ops, undefined, 2));
  //   }
  // );

  // Insert into Users (name,age,location)
  db.collection("Users").insertOne(
    {
      name: "nomad",
      age: 22,
      location: "Savran"
    },
    (err, res) => {
      if (err) {
        return console.log("Unable to insert", err);
      }
      console.log(JSON.stringify(res.ops, undefined, 2));
    }
  );

  db.close();
});
