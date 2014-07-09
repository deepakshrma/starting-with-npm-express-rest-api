/**
 * Created by intelligrape on 7/7/14.
 */
var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('todoDB', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'todoDB' database");
        db.collection('todolist', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'todolist' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});
exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving task: ' + id);
    db.collection('todolist', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.header("Access-Control-Allow-Origin", 'http://localhost:8000');
            res.send(item);
        });
    });
};

exports.findAll = function(req, res) {
    db.collection('todolist', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.header("Access-Control-Allow-Origin", 'http://localhost:8000');
            res.send(items);
        });
    });
};

exports.addTask = function(req, res) {
    var buf = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){ buf += chunk });
    req.on('end', function() {
        var message;
        message = JSON.parse(buf);
        console.log('Adding task: ' + message.message);
        db.collection('todolist', function(err, collection) {
            collection.insert(message.message, {safe:true}, function(err, result) {
                if (err) {
                    res.header("Access-Control-Allow-Origin", 'http://localhost:8000');
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('Success: ' + JSON.stringify(result[0]));
                    res.header("Access-Control-Allow-Origin", 'http://localhost:8000');
                    res.send(result[0]);
                }
            });
        });
    });

}

exports.updateTask = function(req, res) {
    var id = req.params.id;
    var task = req.body;
    console.log('Updating task: ' + id);
    console.log(JSON.stringify(task));
    db.collection('todolist', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, task, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating task: ' + err);
                res.header("Access-Control-Allow-Origin", 'http://localhost:8000');
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.header("Access-Control-Allow-Origin", 'http://localhost:8000');
                res.send(task);
            }
        });
    });
}

exports.deleteTask = function(req, res) {
    var id = req.params.id;
    console.log('Deleting Task: ' + id);
    db.collection('todolist', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.header("Access-Control-Allow-Origin", '*');
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.header("Access-Control-Allow-Origin", '*');
                res.send(id);
            }
        });
    });
}

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {

    var todolist = [
        {
            id:1,
            task: "learn Express js",
            created: "07-Jul-2014",
            status: "working"
        },
        {   id:2,
            task: "learn Angular js",
            created: "07-Jul-2014",
            status: "working"
        }];

    db.collection('todolist', function(err, collection) {
        collection.insert(todolist, {safe:true}, function(err, result) {});
    });

};