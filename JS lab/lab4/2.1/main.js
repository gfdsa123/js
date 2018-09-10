/*  Napisz skrypt, który korzystając z modułu fs, dla podanego w linii komend
    napisu, wyświetla informację czy reprezentuje on nazwę (istniejącego) pliku
    czy katalogu. Jeżeli jest to plik, to korzystając z funkcji w wersji
    synchronicznej (fs.*Sync(...)), ma on wypisać jego zawartość */

'use strict';
const fs = require('fs');
//const args = require('minimist')(process.argv.slice(2));

function main() {
    if (process.argv.length < 3) {
        console.log('Missing argument.\n');
    } else {
        var str = process.argv[2];
        var stats = fs.lstatSync(str);

        if (!stats.isDirectory() && !stats.isFile()) {
            console.log('Given directory/file does not exist.');
        } else if (stats.isDirectory()) {
            console.log('Directory exists.');
        } else if (stats.isFile()) {
            console.log('File exists.');
            var text = fs.readFileSync(str);
            console.log(text.toString());
        }
    }
}

main();