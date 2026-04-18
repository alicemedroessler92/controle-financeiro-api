let transactions = []

const salvarTransacao = (dados) => {
  const nova = {
    id: transactions.length + 1,
    ...dados
  }

  transactions.push(nova)
  return nova
}

const buscarTransacoes = () => {
  return transactions
}

module.exports = { salvarTransacao, buscarTransacoes }