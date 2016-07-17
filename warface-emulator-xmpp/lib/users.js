// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({ 
    userid: Number,
    profileid: Number,
    username: String, 
    nickname: String,
    password: String, 
    email: String,
    affiliateid: String,
    lang: String
}));