var http = require ("http");
var url = require ("url");
var fs = require ("fs");
var plik = 'lab6page.html';
var qs = require('querystring');

var spolki = ["spolka1", "spolka2", "spolka3"];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


http.createServer (function (request, response) {
  console.log("--------------------------------------");
  console.log("Względny adres URL bieżącego żądania: " + request.url + "\n");
  var url_parts = url.parse (request.url, true);  //parsowanie (względnego) adresu URL
  if (url_parts.pathname == '/stock') {  //Przetwarzanie zawartości formularza, jeżeli względny URL to '/submit'
    if (request.method  == 'POST') {
      var body = '';
      request.on('data', function(data) {
        body += data;
      })
      request.on('end', function() {
        var params = qs.parse(body);
        var N = params['N'];
        console.log(N);
        response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
        response.write("Serwer otrzymal " + N); //Dane (odpowiedź), które chcemy wysłać przeglądarce WWW
        response.end(); //Wysłanie odpowiedzi
      });
    }
  }
  else { //Wysłanie, do przeglądarki, zawartości pliku (dokumentu HTML) o nazwie zawartej w zmiennej 'plik'
      fs.stat(plik, function (err,stats) {
        if (err == null) { //Jeżeli plik istnieje
            fs.readFile (plik, function (err, data) { //Odczytaj jego zawartość
              response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
              response.write(data);   //Wyślij, przeglądarce, zawartość pliku
              response.end();
            });
        }
        else { //Jeżeli plik nie  istnieje
            response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
            response.write('Plik ' + plik + ' nie istnieje');
            response.end();
        } //else
      }); //fs.stat
  } //else

}).listen(8080);
console.log("Uruchomiono serwer na porcie 8080");
console.log("Aby zakończyć działanie serwera, naciśnij 'CTRL+C'");
