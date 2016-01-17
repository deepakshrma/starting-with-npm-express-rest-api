//Step2:add callback on listen method
"use strict";
var Express = require('express');
var PORT = 3000;
var app = Express();
//require router module
var router = require('./router');
var userRouter = require('./router/users');
function middleware(req, res, next) {
    console.info('inside middleware');
    //do something with req, call next once done
    next()
}
app.use(middleware);
//add static server
app.use('/static', Express.static('views'));

//add routes
router(app);
userRouter(app);

app.listen(PORT, function () {
    console.info("Server is running @:http://localhost:%d", PORT);
});