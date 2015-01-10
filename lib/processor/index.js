module.exports = serveIndex;

function serveIndex(root) {
  return function(req, res, next){
      if (req.url == '/') {
        req.url = '/index.html';
      }
      next();   
  }
}
