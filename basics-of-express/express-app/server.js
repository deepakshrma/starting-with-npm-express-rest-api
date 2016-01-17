//Step2:add callback on listen method
"use strict";
var Express = require('express');
var PORT = 3000;
var app = Express();
//logging middleware
function logger(req, res, next) {
    var startDate = Date.now();
    res.on("finish", function () {
        // some code to be executed after another middleware
        // does some stuff
        var statusCode = res.statusCode;
        var status = (statusCode > 100 && statusCode < 400)
            ? 'OK' : (statusCode > 400 && statusCode < 500)
            ? 'BAD REQUEST' : "ERROR";
        console.info("%d %s %s", statusCode, status, req.url);
    });
    next()
}
//how to use it
app.use(logger);

//add static server
app.use('/static', Express.static('views'));

//require router module
//add routes
require('./router')(app);
require('./router/users')(app);
require('./router/birds')(app);
require('./router/books')(app);
//error handling middleware
function errorHandler(err, req, res, next) {
    console.info(err);
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).send(err.message);
}
app.use(errorHandler);

app.listen(PORT, function () {
    console.info("Server is running @:http://localhost:%d", PORT);
});