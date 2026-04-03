# API de Controle Financeiro

API REST desenvolvida em Node.js com Express para gerenciamento de transações financeiras.

## Funcionalidades

- Criar transações (entrada e saída)
- Listar transações
- Atualizar transações
- Deletar transações
- Calcular saldo total

## Tecnologias

- Node.js
- Express
- JavaScript

## Rotas da API

### Criar transação
POST /transactions

### Listar transações
GET /transactions

### Atualizar transação
PUT /transactions/:id

### Deletar transação
DELETE /transactions/:id

### Ver saldo
GET /balance

## 🎯 Objetivo

Este projeto foi desenvolvido com o objetivo de praticar desenvolvimento back-end com Node.js, criação de APIs REST e manipulação de dados.


## 👩‍💻 Desenvolvido por

Alice Medina

## Como rodar o projeto

```bash
npm install
node server.js

## Exemplo de requisição

```json
{
  "title": "Salário",
  "amount": 2500,
  "type": "income",
  "category": "Trabalho",
  "date": "2026-04-02"
}

