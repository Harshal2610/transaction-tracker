const express = require("express");
const app = express();
const transactionRouter = require("./routes/transRoutes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

// Api

app.use(express.json());

app.use("/api/v1/transactions", transactionRouter);

// server

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("Connected to database sucessfully");
});

// For testing
// const transSchema = new mongoose.Schema({
//   title: String,
//   amount: Number,
// });

// const Transaction = mongoose.model("Transaction", transSchema);

// const testTrans = new Transaction({
//   title: "Food",
//   amount: 200,
// });

// testTrans.save().then((doc) => console.log(doc));

const port = 3000;

app.listen(port, () => {
  console.log("App running on port 3000");
});
