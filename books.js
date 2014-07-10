/**
 * Created by intelligrape on 9/7/14.
 */
// books.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var bookObject ={
    id: String,
    name: String,
    info: String,
    authors: { type : Array , "default" : [] }
};
var BooksSchema   = new Schema(bookObject);

var Books = mongoose.model('Books', BooksSchema);
// get all the books (accessed at GET http://localhost:8080/api/books)
exports.findAll = function(req, res) {
    Books.find(function(err, books) {
        if (err)
            res.send(err);

        res.json(books);
    });
}

// create a book (accessed at POST http://localhost:8080/api/books)
exports.addBook = function(req, res) {

    var book = new Books(); 		// create a new instance of the book model
    // book.name = req.body.name;  // set the book name (comes from the request)
    for(var key in bookObject){
        book[key] = req.body[key]; 	// update the books info
    }
    // save the book and check for errors
    book.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'book created!' });
    });

}

// get the book with that id (accessed at GET http://localhost:8080/api/books/:book_id)
exports.findById = function(req, res) {
    Books.findById(req.params.book_id, function(err, book) {
        if (err)
            res.send(err);
        res.json(book);
    });
}
// update the book with this id (accessed at PUT http://localhost:8080/api/books/:book_id)
exports.updateBook = function(req, res) {

    // use our book model to find the book we want
    Books.findById(req.params.book_id, function(err, book) {

        if (err)
            res.send(err);
        for(var key in bookObject){
            book[key] = req.body[key]; 	// update the books info
        }
        // save the book
        book.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'book updated!' });
        });

    });
}
// delete the book with this id (accessed at DELETE http://localhost:8080/api/books/:book_id)
exports.deleteBook = function(req, res) {
    Books.remove({
        _id: req.params.book_id
    }, function(err, book) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
}