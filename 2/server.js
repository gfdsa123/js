const http = require('http');
const url = require('url');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);

    console.log(req.method + ' ' + q.pathname);

    if (q.pathname === '/') {
        fs.readFile('index.html', function (err, data) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        })
    }

    if (q.pathname === '/script.js') {
        fs.readFile('script.js', function (err, data) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/javascript');
            res.write(data);
            res.end();
        })
    }

    if (q.pathname === '/delete') {
        let filePath = q.query['filePath'];

        fs.unlink(filePath, function (err) {
            let message = '';

            if (err) {
                message = 'Failed to delete';
            } else {
                message = 'Deleted'
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.write(message);
            res.end();
        })


    }

    if (q.pathname === '/change_name') {
        let fileNames = q.query['filePath'];

        let originalName = fileNames.split(' ')[0];
        let targetName = fileNames.split(' ')[1];

        fs.rename(originalName, targetName, function (err) {
            if (err) {
                message = 'Failed to rename';
            } else {
                message = 'Renamed'
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.write(message);
            res.end();
        });
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});