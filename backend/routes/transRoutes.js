const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transController");

router
  .route("/")
  .get(transactionController.getTransaction)
  .post(transactionController.createTransaction);

router.route("/:id").delete(transactionController.deleteTransaction);

module.exports = router;
