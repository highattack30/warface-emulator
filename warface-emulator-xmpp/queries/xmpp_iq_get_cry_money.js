var ltx = require('ltx');
var Profile = require('../lib/db/profiles.js');

exports.module = function(client, stz) {
    Profile.findOne({username: client.jid.user}, function(err, profile_db) {

    		get_cry_money = ltx.parse(
    			"<iq to='ms.warface' type='get'>"+
    			"<query xmlns='urn:cryonline:k01'>"+
    			    "<get_cry_money cry_money='"+profile_db.cry_money+"' />"+
    			"</query>"+
    			"</iq>"
    		)

        	client.send(get_cry_money)

    });
}