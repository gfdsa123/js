var http = require ("http");
var url = require ("url");
  
http.createServer (function (request, response) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    console.log("--------------------------------------");
    console.log("Względny adres URL bieżącego żądania: " + request.url + "\n");
    var url_parts = url.parse (request.url, true);  //parsowanie (względnego) adresu URL
    if (url_parts.pathname == '/submit') {  //Przetwarzanie zawartości formularza, jeżeli względny URL to '/submit' 
        console.log(url_parts.query.imie);
      var powitanie = parseInt(url_parts.query.imie)+1;
      response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"}); 
      response.write(powitanie.toString()); //Dane (odpowiedź), które chcemy wysłać przeglądarce WWW
      response.end(); //Wysłanie odpowiedzi
      console.log("Serwer wysłał do przeglądarki tekst: '"+powitanie+"'"); 
    }
}).listen(8081);
console.log("Uruchomiono serwer na porcie 8080");
console.log("Aby zakończyć działanie serwera, naciśnij 'CTRL+C'");