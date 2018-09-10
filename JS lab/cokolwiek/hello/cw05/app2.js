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
    res.render('index', {
        a:x,
        b:y,
        c:x+y
    });
});
app.get('/add/:x/:y',(req, res)=>{
    
    res.render('index', {
        a:req.params.x,
        b:req.params.y,
        c:(parseInt(req.params.x)+parseInt(req.params.y))
    });
})
app.listen(3000, function () {
    console.log('Aplikacja jest dostępna na porcie 3000');
});