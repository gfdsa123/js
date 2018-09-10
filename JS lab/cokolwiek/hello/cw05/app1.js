//Brak użycia systemu szablonów
var express = require('express'),
    logger = require('morgan');
var app = express();
var x = 1;
var y = 2;
 
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.send(`<h1>Witaj Świecie!</h1> <p>Moje liczby to ${x} + ${y} = ${x+y}`);
})
app.get('/add/:x/:y',(req, res)=>{
    
    res.send(`<h1> liczby mowia prawde ${req.params.x} + ${req.params.y} = ${parseInt(req.params.x)+parseInt(req.params.y)}`);
    //console.log(req.params.x);
})
app.listen(3000, function () {
    console.log('Aplikacja jest dostępna na porcie 3000');
});