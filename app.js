import mongoose from "mongoose";

// Connect to MongoDB at port 27017
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

// Defining a Schema for Fruit Collection
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

// Defining a Schema for People Collection
const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema, // Establishing relationship between two collections
});

// Compiling our schema into a Model.
const Fruit = mongoose.model("Fruit", fruitSchema);
// Compiling our schema into a Model.
const People = mongoose.model("People", peopleSchema);

/* ---------- Creating documents and inseting them into the collections (One Time Process) ----------

<----- Fruit Collection ----->

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Good",
});

fruit.save(); // Save fruit to Fruit collection

const watermelon = new Fruit({
  name: "Watermelon",
  rating: 7,
  review: "Good"
});

// watermelon.save();

const grape = new Fruit({
  name: "Grape",
  rating: 8,
  review: "Good",
});

// grape.save();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Very Good",
});

const orange = new Fruit({
  name: "Orange",
  rating: 10,
  review: "Very Good",
});

const banana = new Fruit({
  name: "Banana",
  rating: 8,
  review: "Good",
});

Fruit.insertMany([kiwi, orange, banana], (err) => {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log(
      "Successfully added all the documents to Fruit collection of fruitsDB"
    );
  }
});

<----- Fruit Collection End ----->

<----- People Collection ----->

const people = new People({
  name: "John",
  age: 32,
});

people.save();

const amy = new People({
  name: "Amy",
  age: 32,
  favouriteFruit: grape
});

// amy.save();

<----- People Collection End ----->

---------------------------- End ----------------------------------- */

// Reading the database

Fruit.find((err, fruits) => {
  if (err) {
    console.log("Error: " + err);
  } else {
    mongoose.connection.close(); // Close the connection at end

    console.log("Fruit:");
    fruits.forEach((obj) => {
      console.log(obj.name);
    });
  }
});

People.find((err, people) => {
  if (err) {
    console.log(err);
  } else {
    console.log("People:");
    people.forEach((obj) => {
      console.log(obj.name);
    });
  }
});

// Updating the database

// Fruit.updateOne(
//   { _id: "62b71718953c8e500a5232a3" },
//   { name: "Peaches", rating: 5 },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Update Sucessfull");
//     }
//   }
// );

// People.updateOne({ name: "John" }, { favouriteFruit: grape }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Update Sucessfull");
//   }
// });

// Deleting from the databse

// Fruit.deleteOne({ _id: "62b71718953c8e500a5232a3" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Deletion Sucessfull");
//   }
// });
