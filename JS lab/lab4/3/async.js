// Utwórz zmodyfikowaną wersję skryptu z pkt. 2.1:
// - skrypt używa funkcji modułu fs, ale tylko i wyłącznie, w wersji asynchronicznej
// - dane są przekazywane z formularza HTML, a nie z linii komend
// - wszelakie dane wynikowe (treść pliku, informacja czy dany napis reprezentuje nazwę pliku czy katalogu) mają się pojawiać w przeglądarce WWW, a nie w konsoli
//
// 'use strict';
var fs = require('fs');
var http = require('http');
var util = require('util');
//
http.createServer(function (request, response) {
    if (process.argv.length < 3) {
        response.write('Too few args.\n');
    } else {
        var str = process.argv[2];
        var stats = fs.lstatSync(str);

        if (!stats.isDirectory() && !stats.isFile()) {
            response.write('Given string is neither a file nor a directory.\n');
            response.end();
        } else if (stats.isDirectory()) {
            response.write('Given string is a directory.\n');
            response.end();
        } else if (stats.isFile()) {

            response.write('Given string is a file. \n\nContent:\n');
            fs.readFile(str, 'utf8', function (error, data) {
                if (error) throw error;
                data.toString().split("\n").forEach(function (line, index, arr) {
                    if (index === arr.length - 1 && line === "") {
                        return;
                    }
               //     response.write(line);
                 //   response.end();
                    console.log(line);
                });
            });
            response.end();

            ///// TODO
        }
    }

}).listen(8080);
console.log('Server running..');

/*var fs = require("fs");
console.log("start");
fs.readFile("file.txt", function(error, data) {
  if (error) { throw error; }
  data.toString().split("\n").forEach(function(line, index, arr) {
    if (index === arr.length - 1 && line === "") { return; }
    console.log(index + " " + line);
  });
  console.log("end");
});*/