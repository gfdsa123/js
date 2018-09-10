//Brak użycia systemu szablonów
var express = require('express'),
    logger = require('morgan');
var app = express();
var x = 1;
var y = 2;
var result = x + y;

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.send(x + ' + ' + y + ' = ' + result);
});
app.get('/add/:x/:y', function (req, res) {
    var r = parseInt(req.params.x) + parseInt(req.params.y);
    res.send(req.params.x + ' + ' + req.params.y + ' = ' + r);
});

app.listen(3000, function () {
    console.log('Aplikacja jest dostępna na porcie 3000');
});
