var fs = require("fs");

var args=process.argv;

var files=[];
var ops=[];
for(var i=2;i<args.length/2+1;i++){
    files.push(args[i]);
}
for (var i = args.length/2+1;i<args.length;i++){
    var d=args[i].split(":");
    ops[d[0]]=d[1];
}

for(var i =0;i<files.length;i++){
    if(ops[i]==1){
        save(files[i], smallBig(files[i]));
    }
    else{
        save(files[i], reverseFile(files[i]));
    }
}

function save(filen, lines){
    fs.writeFileSync(filen, lines);
}

function smallBig(filen){
    var lines = readFileSync(filen, 'utf8');
    lines.split("");
    for(var i=0;i<lines.length;i++){
        if(lines[i]==lines[i].toUpperCase()) lines[i]=lines[i].toLowerCase();
        else lines[i]=lines[i].toUpperCase
    }
    lines=lines.join("");
    return lines;
}


function reverseFile(filen){
    var lines;
    lines=fs.readFileSync(filen, 'utf8');
    //console.log(lines);
    lines=lines.split("\n");
    for(var i=0;i<lines.length;i+=2){
     lines[i]=reverseLine(lines[i]);
    }
    lines=lines.join("\n");
    return lines;
}

  function reverseLine(str){
    var words=str.split(" ");
    for( var i=0;i<words.length;i++){
        words[i]=reverseString(words[i]);
    }
    return words.join(" ");
}
function reverseString(str) {
	return str.split("").reverse().join("");
}