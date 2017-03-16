export default function (env = 'development') {
  const ENV = {
    environment: env,
    PORT: process.env.PORT || 8888,
  };

  ENV.signalmaster = {
    isDev: true,
    server: {
      port: 8888,
      secure: false,
      key: null,
      cert: null,
      password: null,
    },
    rooms: {
      maxClients: 0,
    },
    stunservers: [{
      url: 'stun:stun.l.google.com:19302',
    }],
    // turnservers: [{
    //   urls: ['turn:your.turn.servers.here'],
    //   secret: 'turnserversharedsecret',
    //   expiry: 86400
    // }],
  };

  if (env === 'production') {
    ENV.signalmaster = {
      isDev: false,
      server: {
        port: 8888,
        secure: true,
        key: 'config/sslcerts/key.pem',
        cert: 'config/sslcerts/cert.pem',
        password: null,
      },
      rooms: {
        maxClients: 0,
      },
      stunservers: [{
        url: 'stun:stun.l.google.com:19302',
      }],
      // turnservers: [{
      //   urls: ['turn:your.turn.servers.here'],
      //   secret: 'turnserversharedsecret',
      //   expiry: 86400,
      // }],
    };
  }

  return ENV;
}
