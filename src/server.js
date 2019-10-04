const express = require('express');
const MongooseConfig = require('./config/MongooseConfig');

const app = express();


const routes = require('./routes');

console.log('Iniciando configurações do servidor...');

app.use(express.json());

app.use(routes);

MongooseConfig.config();

app.listen(3000);

console.log('Servidor Iniciado...');