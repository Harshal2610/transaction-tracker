const fs = require("node:fs");

const transactions = JSON.parse(
  fs.readFileSync(`${__dirname}/transactions.json`)
);

exports.getTransaction = (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      transactions,
    },
  });
};

exports.createTransaction = (req, res) => {
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

exports.deleteTransaction = (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "success",
  });
};
