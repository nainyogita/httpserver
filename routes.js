var path = require("path"),
    fs = require("fs");

var ext;
var ct;

exports.get = {

    "/index": function(req, res) {

        // if (req.url.indexOf('.js') != -1) {
        //     ext = ".js";
        //     ct = "text/javascript"
        // } else if (req.url.indexOf('.css') != -1) {
        //     ext = ".css";
        //     ct = "text/css"
        // } else if (req.url.indexOf('.html') != -1) {
        //     ext = ".html";
        //     ct = "text/html"
        // }


        fs.readFile('index' + ext, function(err, data) {
            if (err) {
                throw err;
            }
            res.writeHead(200, {
                "Content-Type": ct
            });
            res.end(data);
        });
    },

    "/line": function(req, res) {

        fs.readFile('line.html', function(err, data) {
            if (err) {
                throw err;
            }
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(data);
        });
    }

}
