var http = require ("http");
var url = require ("url");


http.createServer (function (request, response) {
    console.log("--------------------------------------");
    console.log("Względny adres URL bieżącego żądania: " + request.url + "\n");
    var url_parts = url.parse (request.url, true);  //parsowanie (względnego) adresu URL
    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    var msg = new Date().toLocaleString();
    response.write(msg);
    response.end(); //Wysłanie odpowiedzi

}).listen(8080);
console.log("Uruchomiono serwer na porcie 8080");
console.log("Aby zakończyć działanie serwera, naciśnij 'CTRL+C'");
