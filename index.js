var connect = require('connect');
var serveIndex = require('./lib/processor/index');
var serveStatic = require('serve-static');
var makeJade = require('./lib/processor/jade')
var makeLess = require('./lib/processor/less')

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

	app.use(serveIndex(root));
  app.use(serveStatic(root));
	app.use(makeJade(root));
	app.use(makeLess(root));

  return app;
}

module.exports = createMiniHarp;
