var ltx = require('ltx');
var Profile = require('../lib/db/profiles.js');

exports.module = function(client, stz) {
    get_cry_money = ltx.parse(
    	"<iq to='"+stz.attrs.from+"' type='get'>"+
    		"<query xmlns='urn:cryonline:k01'>"+
    			"<get_profile_performance missions_hash='-2010098944'/>"+
    		"</query>"+
    	"</iq>"
    )
    client.send(get_cry_money)
}