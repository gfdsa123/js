const modul = require('./modul');
var args = process.argv;
console.log(modul.suma(parseInt(args[2]),parseInt(args[3])));