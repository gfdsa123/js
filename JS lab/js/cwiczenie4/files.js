const fs = require('fs');
var path = process.argv[2];

if (fs.existsSync(path)) {
    try {
        if (fs.lstatSync(path).isDirectory()) {
            var files = fs.readdirSync(path);
            files.forEach(file => {
                console.log(file);
            });
        } else if (fs.lstatSync(path).isFile()) {
            var data = fs.readFileSync(path, 'utf8');
            console.log(data);
        }
    } catch (e) {
        console.log("File read error");
    }
} else {
    console.log("File does not exist");
}
