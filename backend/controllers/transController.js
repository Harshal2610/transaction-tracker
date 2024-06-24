const Transaction = require("../models/transactionModel");

exports.getTransaction = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json({
      status: "success",
      result: transactions.length,
      data: {
        transactions,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Error",
      message: err,
    });
  }
};

exports.createTransaction = async (req, res) => {
  try {
    const newTransaction = await Transaction.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        transaction: newTransaction,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Error",
      message: err,
    });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "Error",
      message: err,
    });
  }
};
