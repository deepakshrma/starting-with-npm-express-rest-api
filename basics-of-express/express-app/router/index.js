"use strict";
var path = require('path');
var fs = require('fs');
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('Hello World!');
    });
    app.get('/users.json', function (req, res) {
        res.send(JSON.stringify([
            {name: 'Deepak', id: 1},
            {name: 'Nama', id: 2},
            {name: 'Nikhil', id: 3}
        ]));
    });
    app.get('/index.html', function (req, res) {
        // maybe test for existence here using fs.stat
        res.writeHead(200, {"Content-Type": "text/html"});
        fs
            .createReadStream(path.resolve('views', 'index.html'))
            .pipe(res);
    });
}