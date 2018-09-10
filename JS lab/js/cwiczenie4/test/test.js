var expect = require('chai').expect;
var modul = require('../modul');
const fs = require('fs');
  
describe('Funkcja suma()', function() {
  it('Zwraca 4 dla 2+2', function() {
    expect(modul.suma(2,2)).to.equal(4);
  });
  it('Zwraca 0 dla -2+2', function() {
    expect(modul.suma(-2,2)).to.equal(0);
  });
});

describe('Reverse', function() {
  it('odwraca a.txt', function() {
    expect(reverse("a.txt")).to.equal("tset\n2TSeT");
  });
});

describe('caseChars', function() {
  it('zmienia chary', function() {
    expect(caseChars("a.txt")).to.equal("TEST\ntEst2");
  });
});


function reverse(file) {
  var data = fs.readFileSync(file, 'utf-8');
  var lines = data.split('\n');
  for(var i = 0; i < lines.length; i++) {
      lines[i] = lines[i].split(' ');
      for(var j = 0; j < lines[i].length; j++) {
          lines[i][j] = lines[i][j].split("").reverse().join("");
      }
      lines[i] = lines[i].join(' ');
  }
  data = lines.join('\n');
  return data;
}

function caseChars(file) {
  var data = fs.readFileSync(file, 'utf-8');
  var chars = data.split('');
  for(var i = 0; i < chars.length; i++) {
      var code = chars[i].charCodeAt(0);
      if(code >= 65 && code <= 90) {
          code = code + 32;
      } else if(code >= 97 && code <= 122) {
          code = code - 32;
      }
      chars[i] = String.fromCharCode(code);
  }
  data = chars.join('');
  return data;
}
