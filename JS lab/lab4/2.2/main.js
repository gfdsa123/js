//TODO
/*

skrypt nazwapliku numerlinii operacja numerlinii2 operacja2
usuwanie
scalanie z nastepna


 */


'use strict';
const fs = require('fs');

function main() {
    if (process.argv.length < 3) {
        console.log('Missing argument. Pattern: main file line_number operation [line_number2 operation2]\n');
    } else {
        var file = process.argv[2];
        var stats = fs.lstatSync(file);

        for (var argNum = 2; argNum < process.argv.length - 1; argNum += 2) {

            if (process.argv[argNum + 1] === 'remove') {


                var text = fs.readFileSync(file);
                text = text.toString().split('\n').slice(2, 3).join('\n');
                console.log(text.toString());

                fs.writeFileSync(file, text);


            } else if (process.argv[argNum + 1] === 'concat') {

            }
        }

    }
}


/* data.split('\n').slice(1).join('\n');*/

main();