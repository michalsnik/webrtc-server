import express from 'express';
import sockets from 'signal-master/sockets';
import config from './config/environment';

global.ENV = config(process.env.NODE_ENV);

const app = express();
const server = app.listen(ENV.PORT, function() {
  console.log(`WebRTC server is listening on port ${ENV.PORT}`);
});

sockets(server, config);
