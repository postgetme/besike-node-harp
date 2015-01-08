var connect = require('connect');
var serveStatic = require('serve-static');
var makeJade = require('./lib/processor/jade')

function createMiniHarp(root) {
  var app = connect();

  app.use(function (req, res, next) {
    if (req.url == '/current-time') {
      res.end((new Date()).toISOString() + '\n');
    }
    else {
      next();
    }
  });

  app.use(serveStatic(root));
	app.use(makeJade(root));

  return app;
}

module.exports = createMiniHarp;
