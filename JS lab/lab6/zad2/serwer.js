var http = require("http");
var url = require("url");
var fs = require("fs");


http.createServer(function (request, response) {
        var today = new Date();
        response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
        response.write(today.toString()); //Dane (odpowiedz), które chcemy wyslac przegladarce WWW
        response.end(); //Wyslanie odpowiedzi

}).listen(8080);

console.log("Uruchomiono serwer na porcie 8080");
console.log("Aby zakonczyc dzialanie serwera, nacisnij 'CTRL+C'");


