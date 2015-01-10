var path = require('path');

module.exports = rejectStupid;

function rejectStupid(root) {
  return function(req, res, next) {
    if (path.extname(req.url) == '.jade' || path.extname(req.url) == '.less') {
      res.statusCode = 404;
      res.end();
    } else {
      next();
    }
  }
}