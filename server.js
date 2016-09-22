const http = require('http');
const port = 8081;
var routes = require('./routes');
const server = http.createServer((req, res) => {

    var url = req.url,
        method = req.method.toLowerCase();

    if (typeof routes[method] !== "undefined" && typeof routes[method][url] == "function") {
        return routes[method][url](req, res);
    }

    res.statusCode = 404;
    res.writeHead(404, {
        "Content-Type": "text/html"
    });
    res.end(res.statusCode + ' :: Page not found: --->' + req.url);
});

server.listen(port, () => {
    console.log('Server listening at http://localhost:${port}/');
});
