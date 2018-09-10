var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function (request, response) {
    /*
      ,,request''  - strumień wejściowy - zawiera dane otrzymane od przeglądarki, np. zakodowaną zawartość pól formularza HTML
       
      ,,response'' - strumień wyjściowy - umieszcza się w nim dane, które chcemy odesłać przeglądarce.
        Odpowiedź, wysyłana za pomocą tego strumienia, musi się składać z dwóch części: nagłówka oraz ciała.
        W nagłówku umieszcza się, m.in., informację o typie (MIME) danych  zawartych w ciele.
        W ciele umieszcza się właściwe dane, np. definicję formularza.
    */
    console.log("--------------------------------------")
    console.log("Względny adres URL bieżącego żądania: " + request.url + "\n")
    var url_parts = url.parse(request.url, true); //parsowanie (względnego) adresu URL

    if (url_parts.pathname == '/submit') { //Przetwarzanie zawartości formularza, jeżeli względny URL to '/submit'
        var q1 = url_parts.query['pyt1']; //Odczytaj zawartość pola (formularza) o nazwie 'imie'
        var a1 = url_parts.query['odp1'];
        var q2 = url_parts.query['pyt2'];
        var a2 = url_parts.query['odp2'];
        console.log("Tworzenie nagłówka odpowiedzi")
        response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});  //Tworzenie nagłówka odpowiedzi - informujemy przeglądarkę, że w ciele odpowiedzi będzie zwykły tekst (text/plain)
        response.write(q1);
        response.write(a1);
        response.write(q2);
        response.write(a2);
        response.end();
        console.log("Wysyłanie odpowiedzi")
    }
    else { //Generowanie formularza
        console.log("Tworzenie nagłówka odpowiedzi")
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});  //Tworzenie nagłówka odpowiedzi - informujemy przeglądarkę, że w ciele odpowiedzi będzie tekst w formacie HTML
        //a teraz  w ciele odpowiedzi umieszczamy formularz HTML
        console.log("Tworzenie ciała odpowiedzi")
        response.write("<html>");
        response.write("<head>");
        response.write("<title>Testy</title>");
        response.write("</head>");
        response.write("<body>");
        response.write("<form method=\"GET\" action=\"/submit/\">");
        response.write("Pyt. 1:<br>");
        response.write("<input type=\"text\" name=\"pyt1\">");
        response.write("<br>");
        response.write("Odp. 1:<br>");
        response.write("<input type=\"text\" name=\"odp1\">");
        response.write("<br>");
        response.write("Pyt. 2:<br>");
        response.write("<input type=\"text\" name=\"pyt2\">");
        response.write("<br>");
        response.write("Odp. 2:<br>");
        response.write("<input type=\"text\" name=\"odp2\">");
        response.write("<br>");
        response.write("<input type=\"submit\" name=\"button\" value=\"Generate\">");
        response.write("</form>");
        response.write("</body>");
        response.write("</html>");
        response.end();  //Koniec odpowiedzi - wyślij ją do przeglądarki
        console.log("Wysyłanie odpowiedzi")
    }
}).listen(8080);
console.log("Uruchomiono serwer na porcie 8080");
console.log("Aby zakończyć działanie serwera, naciśnij 'CTRL+C'");