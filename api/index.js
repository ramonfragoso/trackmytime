const express = require('express');
const bodyParser = require('body-parser');
const config = require('./app/config/config.js');
const app = express();

// Rotas
const routes = require('./routes');

// Acesso ao bd
const db = require('./app/db/db');
db.init();

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);

let port = config.port;
app.listen(config.port, () => {
    console.log('Servidor em execução na porta ' + port);
});