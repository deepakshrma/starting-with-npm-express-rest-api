"use strict";
module.exports = function (app) {
    app.get('/user', function (req, res) {
        res.send(JSON.stringify([
            {name: 'Deepak', id: 1},
            {name: 'Nama', id: 2},
            {name: 'Nikhil', id: 3}
        ]));
    });
    app.post('/user', function (req, res) {
        res.send('Got a POST request');
    });
    app.put('/user', function (req, res) {
        res.send('Got a PUT request at /user');
    });
    app.delete('/user', function (req, res) {
        res.send('Got a DELETE request at /user');
    });
}
