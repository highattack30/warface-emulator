var ltx = require('ltx');
var Profile = require('../lib/db/profiles.js');

exports.module = function(client, stz) {
    Profile.findOne({username: client.jid.user}, function(err, profile_db) {

    		get_contracts = ltx.parse(
    			"<iq to='"+stz.attrs.from+"' type='get'>"+
    			"<query xmlns='urn:cryonline:k01'>"+
    			    "<get_contracts>"+
                        "<contract profile_id='"+profile_db.profileid+"' rotation_id='6' contract_name='' current='0' total='0' rotation_time='3430.003701' status='0' is_available='0'/>"+
                    "</get_contracts>"+
    			"</query>"+
    			"</iq>"
    		)

        	client.send(get_contracts)

    });
}