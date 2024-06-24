const mongoose = require("mongoose");

const transSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  amount: {
    type: Number,
    required: [true, "Amount is required"],
  },
  method: {
    type: String,
    required: [true, "Method is required"],
  },
  description: String,
  date: {
    type: String,
    required: [true, "Date is required"],
  },
});

const Transaction = mongoose.model("Transaction", transSchema);
module.exports = Transaction;
