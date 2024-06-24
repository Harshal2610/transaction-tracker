const fs = require("node:fs");
const mongoose = require("mongoose"); //mongoose is mongodb driver
const dotenv = require("dotenv");
const Transaction = require("../models/transactionModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("DB connected sucessfully");
});

//Read data from the file
const transactions = JSON.parse(
  fs.readFileSync(`${__dirname}/transactions.json`, "utf-8")
);

//Uploading the data to the DB
const importData = async () => {
  try {
    await Transaction.create(transactions);
    console.log("Data sucessfully Loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//Deleting data from the DB
const deleteData = async () => {
  try {
    await Transaction.deleteMany();
    console.log("Data sucessfully Deleted");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

console.log(process.argv);
