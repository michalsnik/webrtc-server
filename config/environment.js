module.exports = function (env = 'development') {
  const ENV = {
    environment: env,
    port: process.env.PORT || 8888,
  };

  ENV.signalmaster = {
    rooms: {
      maxClients: 0,
    },
    stunservers: [{
      url: 'stun:stun.l.google.com:19302',
    }],
    turnservers: [
      // {
      //   urls: ['turn:your.turn.servers.here'],
      //   secret: 'turnserversharedsecret',
      //   expiry: 86400
      // }
    ],
  };

  if (env === 'production') {
    ENV.signalmaster = {
      rooms: {
        maxClients: 0,
      },
      stunservers: [{
        url: 'stun:stun.l.google.com:19302',
      }],
      turnservers: [
        // {
        //   urls: ['turn:your.turn.servers.here'],
        //   secret: 'turnserversharedsecret',
        //   expiry: 86400,
        // }
      ],
    };
  }

  return ENV;
}
