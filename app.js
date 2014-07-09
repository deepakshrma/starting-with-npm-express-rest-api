/**
 * Created by intelligrape on 7/7/14.
 */
var express = require('express'),
    users = require('./users');

var app = express();

app.configure(function () {
    app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
    //app.use(express.bodyParser());
});
app.get('/users', users_back.findAll);
app.get('/users/:id', users_back.findById);
app.post('/users', users_back.addTask);
app.put('/users/:id', users_back.updateTask);
app.delete('/users/:id', users_back.deleteTask);

app.listen(3000);
console.log('Listening on port 3000...');