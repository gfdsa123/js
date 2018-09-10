//Brak użycia systemu szablonów
var express = require('express'),
    logger = require('morgan');
var app = express();
var data = require('./op.json');

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    var response = "";
    for (var i = 0; i < data.operations.length; i++) {
      response += parseOperation(data.operations[i]);
    }
    res.send(response);
});

app.listen(3000, function () {
    console.log('Aplikacja jest dostępna na porcie 3000');
});

function parseOperation(operation) {
  var result = ""
  result += operation.x;
  var r;
  if (operation.op == "add") {
    result += " + ";
    r = operation.x + operation.y;
  }
  else if (operation.op == "sub") {
    result += " - ";
    r = operation.x - operation.y;
  }
  else if (operation.op == "mul") {
    result += " * ";
    r = operation.x * operation.y;
  }
  else if (operation.op == "div") {
    result += " / ";
    r = operation.x / operation.y;
  }
  result += operation.y;
  result += " = ";
  result += r;
  result += "<br />"
  return result;
}
