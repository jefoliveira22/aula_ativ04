const http = require("http");
const app = require("./app");

const porta = 3000;

const server = http.createServer(app);

server.listen(porta, () => {
    console.log("Servidor está rodando na porta " + porta);
});