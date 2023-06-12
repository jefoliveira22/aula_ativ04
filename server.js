
import express from "express";
import { createConnection } from "mysql2";

const app = express();

// CONFIGS BANCO DE DADOS

const db = createConnection({
  host: 'mysql',
  port: '3306',
  user: 'user',
  password: 'passwd',
  database: 'db_aula'
});

// TESTE CONEXÃO AO BANCO

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados');
});

// ROTAS DA API

app.get('/', (request, response) => {
  return response.status(200).json({
    message: "Hello world!"
  });
})

app.get('/liveness', (request, response) => {
  return response.status(200).json({
    message: "Meu app está vivo!"
  });
})

app.get('/readiness', (request, response) => {
  return response.status(200).json({
    message: "Meu app está pronto!"
  });
})

app.get('/consulta-dados', (request, response) => {
  const sql = 'SELECT * FROM clientes;';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta: ' + err.stack);
      response.status(500).send('Erro ao consultar os dados');
      return;
    };
    response.json(result);
  });
});

// ESTADO DA API

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});