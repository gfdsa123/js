var express = require('express'),
    logger = require('morgan'),
    request = require('request');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    request('https://api-v3.mojepanstwo.pl/dane/poslowie.json)', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        var json = JSON.parse(body).hits;

    });

});