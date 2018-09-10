//Aplikacja z wykorzystaniem systemu szablonów 'Pug'
var express = require('express'),
    logger = require('morgan');
var app = express();
var x = 1;
var y = 2;

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    var result = x + y;
    res.render('index', { x: x, y: y, r: result });
});
app.get('/add/:x/:y', function (req, res) {
    var r = parseInt(req.params.x) + parseInt(req.params.y);
    res.render('index', { x: req.params.x, y: req.params.y, r: r });
});

app.listen(3000, function () {
    console.log('Aplikacja jest dostępna na porcie 3000');
});
