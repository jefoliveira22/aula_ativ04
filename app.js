const express = require("express");
const os = require("os");
const app = express();

app.get("/", (request, response) => {
    return response.status(200).json({
            message: "Olá"
        });
})

app.get("/liveness", (request, response) => {
    return response
        .status(200).json({
            message: "Meu app está vivo!",
        });
});

app.get("/readiness", (request, response) => {
    return response
        .status(200).json({
            message: "Meu app está pronto!",
            platform: os.platform(),
            freemem: os.freemem(),
            homedir: os.homedir()
        });
})

module.exports = app;