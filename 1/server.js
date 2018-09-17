//IMPORT STUFF
const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');


//DEFINE THE SERVER
const server = http.createServer(function (req, res) {

    console.log(req.method + ' ' + req.url);

    var q = url.parse(req.url, true);

    if (q.pathname == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }

    if (q.pathname == '/script.js') {
        fs.readFile('script.js', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(data);
            res.end();
        });
    }

    if (q.pathname == '/styles.css') {
        fs.readFile('script.js', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
        });
    }

    if (q.pathname == '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'});
        res.end();
    }

    if (q.pathname == '/form_submit' && req.method == 'GET') {

        let filePath = q.query['filePath'];
        let lineNumber = q.query['lineNumber'];

        fs.readFile(filePath, function (err, data) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            let responseBody = '';

            if (err) {
                responseBody = 'There is no such file or you do not have the right to see it'
            } else {
                responseBody = replaceLine(data.toString(), lineNumber);
            }

            res.write(JSON.stringify({fileContent: responseBody}));
            res.end();
        });

    }

    if (q.pathname == '/form_submit' && req.method == 'POST') {

        let body = '';

        req.on('data', function (data) {
            body += data;
        });

        req.on('end', function () {
            let parsedBody = qs.parse(body);

            let filePath = parsedBody['filePath'];
            let lineNumber = parsedBody['lineNumber'];

            fs.readFile(filePath, function (err, data) {
                res.writeHead(200, {'Content-Type': 'application/json'});
                let responseBody = '';

                if (err) {
                    responseBody = 'There is no such file or you do not have the right to see it'
                } else {
                    responseBody = replaceLine(data.toString(), lineNumber);
                }

                res.write(JSON.stringify({fileContent: responseBody}));
                res.end();
            });
        });
    }



});


//RUN THE SERVER
const hostname = '127.0.0.1';
const port = 8000;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


//MY FUNCTIONS
function replaceLine(data, line) {
    let arrayOfLines = data.split('\n');

    if (line >= arrayOfLines.length) {
        return 'There is no such line in this file';
    }

    arrayOfLines[line] = 'THIS LINE WAS REPLACED';

    return arrayOfLines.join('\n');
}