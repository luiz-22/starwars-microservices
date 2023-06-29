const express = require('express');
const morgan = require('morgan');

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use(require('./routes'));

// Aca podemos agregar un ClientError
server.use("*", (req, res) => {
    res.status(400).send("Not Found");
})

// Estamos como sobreescribiendo el manejado de errores
server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message
    });
})

module.exports = server;