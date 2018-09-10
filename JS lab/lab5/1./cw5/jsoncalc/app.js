//Brak uzycia systemu szablonów
var express = require('express'),
    logger = require('morgan');
var fs = require('fs');

var app = express();

var result;
var args;
var body = "";

var json = JSON.parse(fs.readFileSync('data.json'));

function calc() {
    for (var key in json) {
        console.log(key);
        if (key == "/") {
            //console.log("dziele\n");
            args = json[key].split(" ");
            result = args [0] / args [1];
            body += args[0] + " / " + args [1] + " = " + result + "<br>";
        }
        if (key == "+") {
            args = json[key].split(" ");
            result = +args[0] + +args [1];
            body += args[0] + " + " + args [1] + " = " + result + "<br>";
        }
        if (key == "*") {
            args = json[key].split(" ");
            result = args [0] * args [1];
            body += args[0] + " * " + args [1] + " = " + result + "<br>";
        }
        if (key == "-") {
            args = json[key].split(" ");
            result = args [0] - args [1];
            body += args[0] + " - " + args [1] + " = " + result + "<br>";
        }
    }
}

calc();

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.send('<h1>' + body + '</h1>');

});

app.listen(3000, function () {
    console.log('Aplikacja jest dostepna na porcie 3000');
}); 
