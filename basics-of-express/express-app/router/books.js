"use strict";
module.exports = function (app) {
    app.route('/book')
        .get(function (req, res) {
            res.send('Get a random book');
        })
        .post(function (req, res) {
            res.send('Add a book');
        })
        .put(function (req, res) {
            res.send('Update the book');
        });
}
