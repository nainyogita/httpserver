const http = require('http');
var fs = require('fs');
var path = require('path');

const port = 8081;

const server = http.createServer((req, res) => {

    var filePath = '.' + req.url;
    if (filePath == './')
        filePath = './index.html';

    var extname = path.extname(filePath);
    var contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;

        case '.json':
            contentType = 'application/json';
            break;
        default:

    }

    fs.readFile(filePath, function(error, data) {
        if (error) {
            res.statusCode = 404;
            res.writeHead(404, {
                'contentType': 'text/plain'
            });
            res.end(res.statusCode + '::Page not found ---->' + req.url);
        } else {
            res.statusCode = 200;
            res.writeHead(200, {
                'Content-Type': contentType
            });
            res.end(data);
        }
    })


});

server.listen(port, () => {
    console.log('Server listening at http://localhost:${port}/');
});
