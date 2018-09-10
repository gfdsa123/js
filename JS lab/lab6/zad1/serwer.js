var http = require ("http");
var url = require ("url");
var fs = require ("fs");
var plik = 'formularz.html';

http.createServer (function (request, response) {
    console.log("--------------------------------------");
    console.log("Wzgledny adres URL biezacego żądania: " + request.url + "\n");
    var url_parts = url.parse (request.url, true);  //parsowanie (wzglêdnego) adresu URL


    var imie = url_parts.search.split("=").pop();



    if (url_parts.pathname == '/submit') {  //Przetwarzanie zawartoci formularza, je¿eli wzglêdny URL to '/submit'

        var powitanie = 'Witaj ' + url_parts.query.imie;
        response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
        response.write(powitanie); //Dane (odpowied), które chcemy wys³aæ przegl¹darce WWW
        response.end(); //Wys³anie odpowiedzi
        console.log("Serwer wys³a³ do przegl¹darki tekst: '"+powitanie+"'");
    }
    else { //Wys³anie, do przegl¹darki, zawartoci pliku (dokumentu HTML) o nazwie zawartej w zmiennej 'plik'
        fs.stat(plik, function (err,stats) {
            if (err == null) { //Je¿eli plik istnieje
                fs.readFile (plik, function (err, data) { //Odczytaj jego zawartoæ
                    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
                    response.write(data);   //Wylij, przegl¹darce, zawartoæ pliku
                    response.end();
                });
            }
            else { //Je¿eli plik nie  istnieje
                response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
                response.write('Plik ' + plik + ' nie istnieje');
                response.end();
            } //else
        }); //fs.stat
    } //else
}).listen(8080);
console.log("Uruchomiono serwer na porcie 8080");
console.log("Aby zakonczyc dzialanie serwera, nacisnij 'CTRL+C'");