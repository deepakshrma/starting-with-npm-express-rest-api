/**
 * Created by intelligrape on 9/7/14.
 */
    // users.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var userObject ={
    id: String,
    name: String,
    team: String,
    info: String
};
var UsersSchema   = new Schema(userObject);

var Users = mongoose.model('Users', UsersSchema);
// get all the users (accessed at GET http://localhost:8080/api/users)
exports.findAll = function(req, res) {
    Users.find(function(err, users) {
        if (err)
            res.send(err);

        res.json(users);
    });
}

// create a user (accessed at POST http://localhost:8080/api/users)
exports.addUser = function(req, res) {

        var user = new Users(); 		// create a new instance of the User model
        // user.name = req.body.name;  // set the user name (comes from the request)
        for(var key in userObject){
            user[key] = req.body[key]; 	// update the users info
        }
        // save the user and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });

    }

// get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
exports.findById = function(req, res) {
        Users.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    }
    // update the user with this id (accessed at PUT http://localhost:8080/api/users/:user_id)
exports.updateUser = function(req, res) {

        // use our user model to find the user we want
        Users.findById(req.params.user_id, function(err, user) {

            if (err)
                res.send(err);
            for(var key in userObject){
                    user[key] = req.body[key]; 	// update the users info
            }
            // save the user
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'user updated!' });
            });

        });
    }
    // delete the user with this id (accessed at DELETE http://localhost:8080/api/users/:user_id)
exports.deleteUser = function(req, res) {
        Users.remove({
            _id: req.params.user_id
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    }