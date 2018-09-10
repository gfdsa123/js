const modul = require('./modul.js');

// var xx = 3;
// var yy = 4;
//
// console.log('x = ' + xx);
// console.log('y = ' + yy);
// console.log('sum = ' + modul.sum(xx, yy));

'use strict';

const args = require('minimist')(process.argv.slice(2));
console.log('x = ' + args.x);
console.log('y = ' + args.y);
console.log('sum = ' + modul.sum(args.x, args.y));
