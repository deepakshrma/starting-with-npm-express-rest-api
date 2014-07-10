// server.js

// BASE SETUP
// =============================================================================
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/expressDB'); // connect to our database


var Users     = require('./users');
var Books     = require('./books');

// call the packages we need
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
var path = require("path")
var http = require("http")
console.log(__dirname)
app.set("view engine","ejs");
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser());

var port = process.env.PORT || 8080; 		// set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 				// get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    //res.render('../index.html');
    res.end("<div><h1>gaggaga</h1></div>")
    //res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here
// <-- route middleware and first route are here

// more routes for our API will happen here

// on routes that end in /users
// ----------------------------------------------------
router.route('/users')

    // create a user (accessed at POST http://localhost:8080/api/users)
    .post(Users.addUser)
    // get all the users (accessed at GET http://localhost:8080/api/users)
    .get(Users.findAll);
router.route('/users/:user_id')

    // get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
    .get(Users.findById)
    // update the user with this id (accessed at PUT http://localhost:8080/api/users/:user_id)
    .put(Users.updateUser)
    // delete the user with this id (accessed at DELETE http://localhost:8080/api/users/:user_id)
    .delete(Users.deleteUser);

// on routes that end in /books
// ----------------------------------------------------
router.route('/books')

    // create a book (accessed at POST http://localhost:8080/api/books)
    .post(Books.addBook)
    // get all the books (accessed at GET http://localhost:8080/api/books)
    .get(Books.findAll);
router.route('/books/:book_id')

    // get the book with that id (accessed at GET http://localhost:8080/api/books/:book_id)
    .get(Books.findById)
    // update the book with this id (accessed at PUT http://localhost:8080/api/books/:book_id)
    .put(Books.updateBook)
    // delete the book with this id (accessed at DELETE http://localhost:8080/api/books/:book_id)
    .delete(Books.deleteBook);
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
console.log(path.join(__dirname+"/..","static"))
app.use(express.static(path.join(__dirname+"/..","public")));
http.createServer(app).listen(port,function(){
    "use strict";
    console.log('Magic happens on port ' + port);
})
//app.listen(port);
//console.log('Magic happens on port ' + port);