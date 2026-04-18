const express = require('express')
const router = express.Router()

const { criarTransacao, listarTransacoes } = require('../controllers/transacoesController')

router.post('/transactions', criarTransacao)
router.get('/transactions', listarTransacoes)

router.get('/teste', (req, res) => {
  res.send('ok')
})

module.exports = router