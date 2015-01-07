var connect = require('connect');
var serveStatic = require('serve-static');

function createMiniHarp(root) {
	var app = connect();

	app.use(function (req, res, next) {
		if (req.url == "/current-time") {
			res.end((new Date()).toISOString() + '\n');
		}
		else {
			next();
		}
	});

	app.use(serveStatic(root));

	return app;
}

module.exports = createMiniHarp;