# 💰 Controle Financeiro API

API REST para gerenciamento de receitas e despesas pessoais, com suporte a criação, listagem, atualização e remoção de transações. Os dados são persistidos em banco de dados SQLite.

## 🛠 Tecnologias

- Node.js
- Express
- JavaScript
- SQLite (better-sqlite3)

## 📌 Funcionalidades

- Cadastro de receitas e despesas
- Listagem de transações
- Atualização e remoção de transações
- Persistência de dados com banco de dados local

## ▶️ Como rodar

```bash
# Clone o repositório
git clone https://github.com/alicemedroessler92/controle-financeiro-api.git

# Entre na pasta
cd controle-financeiro-api

# Instale as dependências
npm install

# Inicie o servidor
node server.js
```

## 🔗 Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /transactions | Lista todas as transações |
| POST | /transactions | Cria uma nova transação |

## 👩‍💻 Autora

Feito por **Alice Medroessler** — [GitHub](https://github.com/alicemedroessler92)