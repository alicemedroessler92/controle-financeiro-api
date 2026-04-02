const express = require('express');

const app = express();
app.use(express.json());

let transactions = [];

app.post('/transactions', (req, res) => {
  const { title, amount, type } = req.body;

  const newTransaction = {
    id: Date.now(),
    title,
    amount,
    type
  };

  transactions.push(newTransaction);

  res.json(newTransaction);
});

app.get('/transactions', (req, res) => {
  res.json(transactions);
});

app.get('/balance', (req, res) => {
  const balance = transactions.reduce((total, t) => {
    return t.type === 'income'
      ? total + t.amount
      : total - t.amount;
  }, 0);

  res.json({ balance });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});