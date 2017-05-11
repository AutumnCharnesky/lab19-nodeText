var http = require('http');
var importedStuff = require('./stuff');

console.log(importedStuff);

http.createServer(function(request, response) {

  var randomText =
  (importedStuff.stuff[Math.floor(Math.random() * importedStuff.stuff.length)])
  response.writeHead(200, {'Content-type': "text/plain"});
  response.write(randomText);
  response.end();

}).listen(8080);
