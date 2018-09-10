var request = require('request');
var express = require('express'),
    logger = require('morgan');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    request('https://mojepanstwo.pl/dane/poslowie.json', function (error, response, body) {
        console.log('error:', error);
        console.log('response:', response && response.statusCode);
        var dataJSON = JSON.parse(body).hits;
        for (var i = 0; i < dataJSON.length; i++) {
            dataJSON[i] = dataJSON[i].data;
        }
        dataJSON.sort((a, b) => {
            var w_a = a.wartosc_uposazenia_pln + a.wartosc_biuro_spotkania + a.wartosc_biuro_biuro + a.wartosc_biuro_przejazdy + a.wartosc_biuro_wynagrodzenia_pracownikow;
            var w_b = b.wartosc_uposazenia_pln + b.wartosc_biuro_spotkania + a.wartosc_biuro_biuro + b.wartosc_biuro_przejazdy + b.wartosc_biuro_wynagrodzenia_pracownikow;
            return w_b - w_a;
        })
        var out = "";
        for (var i = 0; i < dataJSON.length; i++) {
            out += dataJSON[i].nazwa + " " + (parseInt(dataJSON[i].wartosc_uposazenia_pln) + parseInt(dataJSON[i].wartosc_biuro_spotkania) + parseInt(dataJSON[i].wartosc_biuro_biuro) + parseInt(dataJSON[i].wartosc_biuro_przejazdy) + parseInt(dataJSON[i].wartosc_biuro_wynagrodzenia_pracownikow)) + "<br />";
        }
        res.send(out);
    });
});

app.listen(3000, function () {
    console.log('Aplikacja jest dostępna na porcie 3000');
});
