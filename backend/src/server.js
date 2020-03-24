const express = require('express');
const MongooseConfig = require('./config/MongooseConfig');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

console.log('Iniciando configurações do servidor...');

app.use(cors());

app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));


app.use(routes);

MongooseConfig.config();

app.listen(3000);

console.log('Servidor Iniciado...');