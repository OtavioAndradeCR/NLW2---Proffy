# Proffy – Plataforma de Conexão entre Professores e Alunos

## 📌 Visão Geral

O **Proffy** é uma **aplicação web fullstack desenvolvida durante a Next Level Week #2 (NLW2)**, com o objetivo de conectar **professores e alunos** para aulas particulares. A plataforma permite o cadastro de professores e a busca por aulas disponíveis com base em disciplina, horário e custo.

O projeto demonstra a construção de uma aplicação completa, integrando **frontend, backend e banco de dados**, sendo um ótimo exemplo para **portfólio profissional**.

---

## 🎯 Objetivo do Projeto

* Desenvolver uma aplicação web fullstack
* Permitir o cadastro e a listagem de professores
* Implementar busca por aulas com filtros
* Demonstrar integração entre frontend, backend e banco de dados

---

## 🛠️ Tecnologias Utilizadas

* **JavaScript / Node.js**
* **Express.js**
* **SQLite**
* **Knex.js**
* **HTML5 / CSS3**
* **Git / GitHub**

---

## 🧱 Arquitetura

O projeto está organizado de forma simples e didática:

* **Backend** – API construída com Node.js e Express
* **Banco de Dados** – SQLite com controle de migrations via Knex
* **Frontend Web** – Interface para cadastro e busca de professores

Essa separação facilita a manutenção e o entendimento do fluxo da aplicação.

---

## ▶️ Como Executar o Projeto

### Pré-requisitos

* Node.js
* Git

### Passos

```bash
# Clonar o repositório
git clone https://github.com/OtavioAndradeCR/NLW2---Proffy.git

# Acessar a pasta do backend
cd NLW2---Proffy/server

# Instalar dependências
npm install

# Executar migrations
npm run migrate

# Iniciar o backend
npm run dev
```

Em outro terminal:

```bash
# Acessar a pasta do frontend
cd ../web

# Instalar dependências
npm install

# Iniciar aplicação web
npm start
```

---

## 📡 Funcionalidades Principais

* Cadastro de professores
* Listagem de professores disponíveis
* Busca por aulas com filtros de disciplina, dia e horário

---

## 🧩 Diferenciais Técnicos

* Aplicação fullstack funcional
* API REST organizada
* Uso de banco de dados relacional
* Projeto desenvolvido do zero em evento prático

---

## 📈 Possíveis Evoluções

* Implementação de autenticação
* Melhorias nos filtros de busca
* Criação de testes automatizados
* Deploy em ambiente de nuvem
