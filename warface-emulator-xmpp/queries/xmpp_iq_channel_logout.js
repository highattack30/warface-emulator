var ltx = require('ltx');
var Profile = require('../lib/db/profiles.js');

exports.module = function(client, stz) {
    channel_logout = ltx.parse(
        "<iq to='"+stz.attrs.from+"' type='get'>"+
    		"<query xmlns='urn:cryonline:k01'>"+
    			"<channel_logout/>"+
    	   "</query>"+
    	"</iq>"
    )
    client.send(channel_logout);
}