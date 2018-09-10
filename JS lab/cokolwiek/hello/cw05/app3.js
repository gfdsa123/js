var express = require('express'),
    logger = require('morgan'),
    request = require('request');
    
var app = express();
var x = 1;
var y = 2;


 
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    request('https://mojepanstwo.pl/dane/poslowie.json', function (error, response, body) {
        //console.log(JSON.parse(body).hits[0]);
        var poslowie=JSON.parse(body).hits;
        poslowie.sort((a,b)=>{
            var zar_a=parseInt(a.data.wartosc_biuro_wynagrodzenia_pracownikow);
            var zar_b=parseInt(b.data.wartosc_biuro_wynagrodzenia_pracownikow);
            return zar_b-zar_a;
        });
        console.log(poslowie.length);
        var content="";
        for(var i=0;i<poslowie.length;i++){
            content+=`<p>${poslowie[i].data.nazwa} ${poslowie[i].data.wartosc_biuro_wynagrodzenia_pracownikow}</p>`;
        }
        res.send(content);
});
})
app.listen(3000, function () {
    console.log('Aplikacja jest dostępna na porcie 3000');
});