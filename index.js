var connect = require('connect');

module.exports = createServer;

function createServer() {
	var app = connect();

	app.use(function (req, res, next) {
		if (req.url == "/current-time") {
			res.end((new Date()).toISOString() + '\n');
		}
		else {
			next();
		}
	});

	return app;
}