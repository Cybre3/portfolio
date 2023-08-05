const express = require('express');
const morgan = require('morgan');
const winston = require('winston');
const { format } = winston;
const { colorize, prettyPrint, label, combine, printf } = format;

const contactRoute = require('../routes/contactRoute');

const myFormat = printf(({ level, message }) => {
  return `${level}: ${message}`;
});


module.exports = function (app) {
  app.use(express.json());

  if (app.get('env') === 'development' || app.get('env') === 'production') {
    app.use(morgan('tiny'));
  }

  winston.add(
    new winston.transports.Console({
      format: combine(label({ label: 'info' }), prettyPrint(), colorize(), myFormat),
    })
  );

  app.use('/', contactRoute);
};
