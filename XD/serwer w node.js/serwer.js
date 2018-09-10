var http = require('http');
var PORT = 8080;
var server = http.createServer(function (request, response) {
    response.end('response end');
});

server.listen(PORT, function () {
    console.log('server on: http://localhost:%s', PORT);
});