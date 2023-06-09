
const express = require('express');
const mysql = require("mysql2");
const app = express();

const db = mysql.createConnection({
  host: 'mysql',
  user: 'user',
  password: 'passwd',
  database: 'db_aula'
});

db.connect(erro => {
  if (erro) {
    console.error('Erro ao conectar ao banco de dados: ' + erro.stack);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados');
});

app.get('/', (request, response) => {
    return response.status(200).json({
        message:"Hello world!"
    });
})

app.get('/liveness', (request, response) => {
    return response.status(200).json({
        message:"Meu app está vivo!"
    });
})

app.get('/readiness', (request, response) => {
    return response.status(200).json({
        message:"Meu app está pronto!"
    });
})

app.get('/consulta-dados', (request, response) => {
  const sql = 'SELECT * FROM clientes';
  db.query(sql, (erro, resultado) => {
    if (erro) {
      console.error('Erro ao executar a consulta: ' + erro.stack);
      response.status(500).send('Erro ao consultar os dados');
      return;
    }
    response.json(resultado);
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});