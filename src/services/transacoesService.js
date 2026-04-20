const db = require('../database');

const salvarTransacao = (dados) => {
  const { title, amount, type, category, date } = dados;

  const resultado = db.prepare(`
    INSERT INTO transacoes (title, amount, type, category, date)
    VALUES (?, ?, ?, ?, ?)
  `).run(title, amount, type, category, date);

  return db.prepare('SELECT * FROM transacoes WHERE id = ?')
    .get(resultado.lastInsertRowid);
};

const buscarTransacoes = () => {
  return db.prepare('SELECT * FROM transacoes').all();
};

module.exports = { salvarTransacao, buscarTransacoes };