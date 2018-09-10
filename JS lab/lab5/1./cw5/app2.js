//Aplikacja z wykorzystaniem systemu szablonów 'Pug'
var express = require('express'),
    logger = require('morgan');
var app = express();
var x = 1;
var y = 2;

//
var z = x + y;

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    var x = 1;
    var y = 3;
    var sum = x + y;
    res.render('index', {a: x, b: y, c: sum});
});
app.get('/add/:x/:y', function (req, res) {
    x = parseInt(req.params(x));
    y = parseInt(req.params(y));
    sum = x + y;
    res.render('index', {a: x, b: y, c: sum});

})
app.listen(3000, function () {
    console.log('Aplikacja jest dostępna na porcie 3000');
});