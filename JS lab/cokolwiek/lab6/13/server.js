var http = require ("http");
var url = require ("url");
var fs = require ("fs");
var plik = 'formularz.html';
  
http.createServer (function (request, response) {
    var url_parts = url.parse (request.url, true);  //parsowanie (względnego) adresu URL
    console.log("--------------------------------------");
    console.log("Względny adres URL bieżącego żądania: " + request.url + "\n");
    console.log(request.method);
    //console.log(Object.keys(url_parts.query).length);
    if(Object.keys(url_parts.query).length==1){
        if(request.method=="POST"){
            var powitanie='';
            console.log("POST");
            request.on('data', (data)=>{
                powitanie='witaj '+data.toString().split("=")[1];
            })
            request.on('end', ()=>{
                console.log(powitanie)
                response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"}); 
          response.write(powitanie); //Dane (odpowiedź), które chcemy wysłać przeglądarce WWW
          response.end(); //Wysłanie odpowiedzi
            })
        }
        else{
                console.log('GET')
                var powitanie = 'Witaj '+url_parts.query.imie;
          response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"}); 
          response.write("dupa dupa"); //Dane (odpowiedź), które chcemy wysłać przeglądarce WWW
          console.log("Serwer wysłał do przeglądarki tekst: '"+powitanie+"'"); 
            
            
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

}).listen(8081);
console.log("Uruchomiono serwer na porcie 8081");
console.log("Aby zakończyć działanie serwera, naciśnij 'CTRL+C'");