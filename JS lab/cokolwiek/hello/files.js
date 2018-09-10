const fs = require("fs");

let path = process.argv[2];

fs.lstat(path, (err, stats) => {

    if(err)
        return console.log(err); //Handle error

    console.log(`Is file: ${stats.isFile()}`);
    if(stats.isFile()){
        console.log(fs.readFileSync(path, "utf8"));
        //, (err2, data)=>{
          //  if(err) return console.log(err);
            //console.log("dada");
            //console.log(data);
        //})
    }
});
