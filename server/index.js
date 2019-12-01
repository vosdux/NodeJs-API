const express = require('express');
const mongoose = require('mongoose');
require('./app/models');
const config = require('./config');

const app = express();
config.express(app);
config.routes(app);

const { appPort, mongoUri } = config.app;

mongoose.connect(mongoUri, { useNewUrlParser: true })
    .then(() => app.listen(
        appPort,
        () => console.log('start server')
    ))
    .catch((err) => console.log('cant connect to DB', err));