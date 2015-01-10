var less = require('less');
var fs = require('fs');
var path = require('path');

module.exports = makeLess;

function makeLess(root) {
  return function (req, res, next) {
    if (path.extname(req.url) == ".css") {
      fs.readFile(root + '/' + path.basename(req.url, '.css') + '.less', 
        { encoding: 'utf8' }, function(err, data) {
          if (err) {
            next();
          }
          else {
            less.render(data, function (err, output) {
              if (err) {
                next();
              }
              else {
                res.writeHead(200, {
                'Content-Length': output.length,
                'Content-Type': 'text/css; charset=UTF-8',
                });
                res.end(output);
              }
            });
          }
        });
    } else {
      next();
    }
  }
}
