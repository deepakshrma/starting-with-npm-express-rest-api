/**
 * Created by intelligrape on 9/7/14.
 */
    // users.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UsersSchema   = new Schema({
    id: String,
    name: String,
    team: String,
    info: String
});

module.exports = mongoose.model('Users', UsersSchema);