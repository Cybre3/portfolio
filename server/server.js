require('dotenv').config();
const express = require('express');
const winston = require('winston');
const config = require('config');

const app = express();

require('./startup/cors')(app);
require('./startup/app-routes-middleware')(app);
require('./startup/config')();
require('./startup/prod')(app);


const port = process.env.PORT || 5000;
app.listen(port, () => winston.info(`listening on port ${port}...`));
