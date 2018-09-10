var http = require("http");
var url = require("url");
var fs = require("fs");
 
http.createServer(function(request, response) {

    console.log("--------------------------------------")
    console.log("Względny adres URL bieżącego żądania: "+request.url+"\n")
    var url_parts = url.parse(request.url,true); //parsowanie (względnego) adresu URL
     
    if(url_parts.pathname == '/submit') { //Przetwarzanie zawartości formularza, jeżeli względny URL to '/submit' 
        var imie=url_parts.query['imie']; //Odczytaj zawartość pola (formularza) o nazwie 'imie'
        console.log("Tworzenie nagłówka odpowiedzi")
        response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});  //Tworzenie nagłówka odpowiedzi - informujemy przeglądarkę, że w ciele odpowiedzi będzie zwykły tekst (text/plain)
        console.log("Tworzenie ciała odpowiedzi")
        console.log(imie);
        const fs = require("fs");

fs.lstat(imie, (err, stats) => {

    if(err)
        return console.log(err); //Handle error
    else{
        console.log(`Is file: ${stats.isFile()}`);
        response.write(`is File:${stats.isFile()}\n`);
    }
    
    if(stats.isFile()){

        fs.readFile(imie, "utf8", (errr, data)=>{
            if(errr) console.log(errr);
            else {
                response.write(data);
                response.end();
            }
        })
        //, (err2, data)=>{
          //  if(err) return console.log(err);
            //console.log("dada");
            //console.log(data);
        //})
    }
});

       // response.write('Witaj '+imie); //Umieść podane dane (tu: tekst 'Witaj ...') w ciele odpowiedzi
         //Koniec odpowiedzi - wyślij ją do przeglądarki
        console.log("Wysyłanie odpowiedzi")
    }
    else { //Generowanie formularza
        console.log("Tworzenie nagłówka odpowiedzi")
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});  //Tworzenie nagłówka odpowiedzi - informujemy przeglądarkę, że w ciele odpowiedzi będzie tekst w formacie HTML
        //a teraz  w ciele odpowiedzi umieszczamy formularz HTML
        console.log("Tworzenie ciała odpowiedzi")
        response.write('<form method="GET" action="/submit">');
        response.write('<label for="imie">Podaj swoje imię</label>');
        response.write('<input name="imie">');
        response.write('<br>');
        response.write('<input type="submit">');
        response.write('<input type="reset">');
        response.write('</form>');
        response.end();  //Koniec odpowiedzi - wyślij ją do przeglądarki
        console.log("Wysyłanie odpowiedzi")
    } 
}).listen(8082);
console.log("Uruchomiono serwer na porcie 8081");
console.log("Aby zakończyć działanie serwera, naciśnij 'CTRL+C'");