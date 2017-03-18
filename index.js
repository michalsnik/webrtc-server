const express = require('express');
const sockets = require('signal-master/sockets');
const config = require('./config/environment');

global.ENV = config(process.env.NODE_ENV);

const app = express();
const server = app.listen(ENV.port, function() {
  console.log(`WebRTC server is listening on port ${ENV.port}`);
});

sockets(server, ENV.signalmaster);
