const express = require('express');

const app = express();
app.use(express.json());

let transactions = [];

// Criar transação
app.post('/transactions', (req, res) => {
  const { title, amount, type, category, date } = req.body;

  if (!title || !amount || !type || !category || !date) {
    return res.status(400).json({
      error: 'title, amount, type, category e date são obrigatórios'
    });
  }

  if (type !== 'income' && type !== 'expense') {
    return res.status(400).json({
      error: 'type deve ser "income" ou "expense"'
    });
  }

  const newTransaction = {
    id: Date.now(),
    title,
    amount,
    type,
    category,
    date
  };

  transactions.push(newTransaction);

  res.status(201).json(newTransaction);
});

// Listar transações
app.get('/transactions', (req, res) => {
  res.json(transactions);
});

// Ver saldo
app.get('/balance', (req, res) => {
  const balance = transactions.reduce((total, t) => {
    return t.type === 'income'
      ? total + t.amount
      : total - t.amount;
  }, 0);

  res.json({ balance });
});

// Editar transação
app.put('/transactions/:id', (req, res) => {
  const { id } = req.params;
  const { title, amount, type, category, date } = req.body;

  const transaction = transactions.find(t => t.id == id);

  if (!transaction) {
    return res.status(404).json({
      error: 'Transação não encontrada'
    });
  }

  if (title !== undefined) transaction.title = title;
  if (amount !== undefined) transaction.amount = amount;
  if (type !== undefined) transaction.type = type;
  if (category !== undefined) transaction.category = category;
  if (date !== undefined) transaction.date = date;

  res.json(transaction);
});

// Editar transação
app.put('/transactions/:id', (req, res) => {
  const { id } = req.params;
  const { title, amount, type, category, date } = req.body;

  const transaction = transactions.find(t => t.id == id);

  if (!transaction) {
    return res.status(404).json({
      error: 'Transação não encontrada'
    });
  }

  if (title !== undefined) transaction.title = title;
  if (amount !== undefined) transaction.amount = amount;
  if (type !== undefined) transaction.type = type;
  if (category !== undefined) transaction.category = category;
  if (date !== undefined) transaction.date = date;

  res.json(transaction);
});

// Deletar transação
app.delete('/transactions/:id', (req, res) => {
  const { id } = req.params;

  const transactionExists = transactions.some(t => t.id == id);

  if (!transactionExists) {
    return res.status(404).json({
      error: 'Transação não encontrada'
    });
  }

  transactions = transactions.filter(t => t.id != id);

  res.json({ message: 'Transação deletada com sucesso' });
});

console.log('ROTA PUT CARREGADA');

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});