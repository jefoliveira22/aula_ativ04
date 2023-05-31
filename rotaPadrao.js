import { Router } from "express";
import Cliente from "./modelo.js";

const rotaPadrao = new Router();
rotaPadrao.get('/liveness', (request, response) => {
    return response.status(200).json({
        message: "Meu app está vivo!"
    });
})
.get('/liveness', (request, response) => {
    return response.status(200).json({
        message: "Meu app está pronto!"
    });
})
.get('/', (request, response) => {
    const cliente = new Cliente();
    const dados = cliente.consultar();
    return response.status(200).json(dados);
})

export default rotaPadrao;