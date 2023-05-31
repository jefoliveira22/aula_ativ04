
const express = require('express');
const mysql = require("mysql2");
const app = express();

const db = mysql.createConnection({
  host: 'http://127.0.0.1',
  user: 'user',
  password: 'passwd',
  database: 'db_aula'
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);
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

app.get('/consulta-dados', (req, res) => {
  const sql = 'SELECT * FROM clientes';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta: ' + err.stack);
      res.status(500).send('Erro ao consultar os dados');
      return;
    }
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});