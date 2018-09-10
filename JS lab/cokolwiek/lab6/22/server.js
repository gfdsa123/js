var http = require ("http");
var url = require ("url");
var fs = require ("fs");
var plik = 'formularz.html';
var spolki = ["spolka1", "spolka2", "spolka3"];
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

http.createServer (function (request, response) {
    console.log("--------------------------------------");
    console.log("Względny adres URL bieżącego żądania: " + request.url + "\n");
    var url_parts = url.parse (request.url, true);  //parsowanie (względnego) adresu URL
    if (url_parts.pathname == '/stock') {  //Przetwarzanie zawartości formularza, jeżeli względny URL to '/submit'
    if (request.method  == 'GET') {
      response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
      var spolka = spolki[randomNumber(0, 3)];
      var akcje = randomNumber(10, 40);
      response.write(spolka + ";" + akcje); //Dane (odpowiedź), które chcemy wysłać przeglądarce WWW
      response.end(); //Wysłanie odpowiedzi
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
}).listen(8084);
console.log("Uruchomiono serwer na porcie 8080");
console.log("Aby zakończyć działanie serwera, naciśnij 'CTRL+C'");