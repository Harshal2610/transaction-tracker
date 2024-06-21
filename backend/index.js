const express = require("express");
const fs = require("node:fs");
const app = express();

app.use(express.json());

const transactions = JSON.parse(
  fs.readFileSync(`${__dirname}/data/transactions.json`)
);

const getTransaction = (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      transactions,
    },
  });
};

const createTransaction = (req, res) => {
  console.log(req.body);

  const newId = transactions[transactions.length - 1].id + 1;
  const newTrans = { id: newId, ...req.body };
  transactions.push(newTrans);

  fs.writeFile(
    `${__dirname}/data/transactions.json`,
    JSON.stringify(transactions),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          transactions: newTrans,
        },
      });
    }
  );
};

const deleteTransaction = (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "success",
  });
};

app.route("/api/v1/transactions").get(getTransaction).post(createTransaction);
app.route("/api/v1/transactions/:id").delete(deleteTransaction);

app.get("/api/v1/users", (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: [{ user: "user1" }, { user: "user2" }, { user: "user3" }],
  });
});

const port = 3000;

app.listen(port, () => {
  console.log("App running on port 3000");
});
