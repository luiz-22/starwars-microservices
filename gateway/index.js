const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(morgan("dev"));

// Quiero que me redirija esta petición al puerto 8001 de la computadora characters
app.use("/characters", createProxyMiddleware({
    target: "http://characters:8001",
    changeOrigin: true,
    pathRewrite: {
      "^/characters": ""
    }
}));

app.use("/films", createProxyMiddleware({
    target: "http://films:8002",
    changeOrigin: true,
    pathRewrite: {
      "^/films": ""
    }
}));

app.use("/planets", createProxyMiddleware({
    target: "http://planets:8003",
    changeOrigin: true,
    pathRewrite: {
      "^/planets": ""
    }
}));

app.listen(8000, () => {
    console.log('Gateway on port 8000')
});