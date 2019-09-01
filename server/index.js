var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
const morgan = require('morgan');

require('dotenv').config()

const config = require('./config/config');

var server_port = process.env.PORT || config.port;
var server_host = process.env.HOST || '0.0.0.0';

require('./utils/db');

require('./models');

var app = express();
app.use(morgan('tiny'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, config.root)));

const routes = require('./routes');
app.use('/api', routes);

app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});