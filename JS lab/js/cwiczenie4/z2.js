const fs = require('fs');

var lastArg = process.argv[process.argv.length - 1]; // nr|operacja
var nr = parseInt(lastArg.split("/")[0]);
var operation = lastArg.split("/")[1];

var files = process.argv.slice(2, process.argv.length - 1);

if (nr < 0 || nr >= process.argv.length - 1) {
    console.log("Invalid file number");
} else {
    var file = files[nr];
    if (operation == "1") {
        reverse(file);
    } else if (operation == "2") {
        caseChars(file);
    } else {
        console.log("Invalid operation number");
    }
}

function reverse(file) {
    var data = fs.readFileSync(file, 'utf-8');
    var lines = data.split('\n');
    for (var i = 0; i < lines.length; i++) {
        lines[i] = lines[i].split(' ');
        for (var j = 0; j < lines[i].length; j++) {
            lines[i][j] = lines[i][j].split("").reverse().join("");
        }
        lines[i] = lines[i].join(' ');
    }
    data = lines.join('\n');
    fs.writeFileSync(file, data, 'utf-8');
}

function caseChars(file) {
    var data = fs.readFileSync(file, 'utf-8');
    var chars = data.split('');
    for (var i = 0; i < chars.length; i++) {
        var code = chars[i].charCodeAt(0);
        if (code >= 65 && code <= 90) {
            code = code + 32;
        } else if (code >= 97 && code <= 122) {
            code = code - 32;
        }
        chars[i] = String.fromCharCode(code);
    }
    data = chars.join('');
    fs.writeFileSync(file, data, 'utf-8');
}
