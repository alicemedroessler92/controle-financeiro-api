const { salvarTransacao, buscarTransacoes } = require('../services/transacoesService')

const criarTransacao = (req, res) => {
  const { title, amount, type, category, date } = req.body

  if (!title || !amount || !type || !category || !date) {
    return res.status(400).json({
      error: 'Todos os campos são obrigatórios'
    })
  }

  const nova = salvarTransacao({
    title,
    amount,
    type,
    category,
    date
  })

  res.status(201).json(nova)
}

const listarTransacoes = (req, res) => {
  const lista = buscarTransacoes()
  res.json(lista)
}

module.exports = { criarTransacao, listarTransacoes }