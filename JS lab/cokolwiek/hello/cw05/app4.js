//Brak użycia systemu szablonów
var express = require('express'),
    logger = require('morgan');
var app = express();
var x = 1;
var y = 2;
 
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

// POST http://localhost:8080/api/users
// parameters sent with 
app.post('/api/users', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;

    res.send(user_id + ' ' + token + ' ' + geo);
});


app.listen(3000, function () {
    console.log('Aplikacja jest dostępna na porcie 3000');
});

