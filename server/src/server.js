const express = require('express');
const server = express();
const routes = require('./routes.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/workestra', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
});

server.use('/public', express.static('public'));
server.use(express.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(routes);

server.listen(3003, console.log('Servidor rodando na porta 3003'));