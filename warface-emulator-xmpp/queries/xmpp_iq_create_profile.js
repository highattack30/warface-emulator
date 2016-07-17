var ltx = require('ltx');
var User = require('../lib/users.js');

exports.module = function(client, stz) {
    User.findOne({username: client.jid.user}, function(err, user_db) {

    });
}