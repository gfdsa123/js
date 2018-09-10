var http = require ("http");
var url = require ("url");
var fs = require ("fs");
var plik = 'formularz.html';
  
http.createServer (function (request, response) {
    console.log("--------------------------------------");
    var d = new Date();
    //console.log(d.())
    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    response.write(d.getDate().toString() +'.' +d.getMonth().toString()+'.'+d.getFullYear().toString()+' '+d.getHours().toString()+':'+d.getMinutes().toString());
    response.end();

}).listen(8082);
console.log("Uruchomiono serwer na porcie 8080");
console.log("Aby zakończyć działanie serwera, naciśnij 'CTRL+C'");