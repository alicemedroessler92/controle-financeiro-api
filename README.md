# 💰 API de Controle Financeiro

API REST desenvolvida com Node.js e Express para gerenciamento de transações financeiras.

---

## 🚀 Funcionalidades

- Criar transações (income / expense)
- Listar todas as transações
- Buscar transação por ID
- Atualizar transações
- Deletar transações
- Filtrar transações por tipo (income / expense)
- Calcular saldo total

---

## 🛠 Tecnologias

- Node.js
- Express
- JavaScript

---

## 📌 Rotas da API

### ➕ Criar transação
POST /transactions

### 📄 Listar transações
GET /transactions

### 🔍 Buscar transação por ID
GET /transactions/:id

### ✏️ Atualizar transação
PUT /transactions/:id

### ❌ Deletar transação
DELETE /transactions/:id

### 🔎 Filtrar por tipo
GET /transactions?type=income  
GET /transactions?type=expense

### 💰 Ver saldo
GET /balance

---

## 📦 Como rodar o projeto

```bash
npm install
node server.js
```

---

##Exemplo de requisição
{
  "title": "Salário",
  "amount": 2500,
  "type": "income",
  "category": "Trabalho",
  "date": "2026-04-02"
}

---

🎯 Objetivo

Este projeto foi desenvolvido com o objetivo de praticar desenvolvimento back-end com Node.js, criação de APIs REST e manipulação de dados.

---

🔥 Próximas melhorias
Integração com banco de dados (MongoDB ou PostgreSQL)
Autenticação de usuários
Organização em camadas (MVC)

---

👩‍💻 Desenvolvido por
Alice Medina Roessler
