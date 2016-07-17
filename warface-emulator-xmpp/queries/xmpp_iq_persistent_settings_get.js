var ltx = require('ltx');
var User = require('../lib/users.js');

exports.module = function(client, stz) {
    User.findOne({username: client.jid.user}, function(err, user_db) {
    	var persistent_settings_get = new ltx.Element('iq', {type: 'get'})
		.c('query', {xmlns: 'urn:cryonline:k01'}) 
		persistent_settings_get.c('persistent_settings_get', {hash: ''}).up()
		client.send(persistent_settings_get)
    });
}