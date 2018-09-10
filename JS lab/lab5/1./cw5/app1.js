//Brak użycia systemu szablonów
var express = require('express'),
    logger = require('morgan');
var app = express();
var x = 1;
var y = 2;

//Zmodyfikuj kod obydwu aplikacji: mają obliczać, a następnie wypisywać wartość x+y.
//Postać danych wynikowych: <pierwszaLiczba> + <drugaLiczba> = <wynik>
var z = x + y;

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.send('<h1>x + y = ' + z + '</h1>');
})

app.listen(3000, function () {
    console.log('Aplikacja jest dostępna na porcie 3000');
});