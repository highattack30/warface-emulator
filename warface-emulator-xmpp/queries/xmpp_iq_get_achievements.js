var ltx = require('ltx');
var Profile = require('../lib/db/profiles.js');

exports.module = function(client, stz) {
    Profile.findOne({username: client.jid.user}, function(err, profile_db) {

    		get_cry_money = ltx.parse(
    			"<iq to='"+stz.attrs.from+"' type='get'>"+
    			"<query xmlns='urn:cryonline:k01'>"+
    			    "<get_achievements>"+
    			    	"<achievement profile_id='"+profile_db.profileid+"'>"+
    			    		"<chunk achievement_id='54' progress='2' completion_time='0'/>"+
    			    		"<chunk achievement_id='55' progress='2' completion_time='0'/>"+
    			    		"<chunk achievement_id='58' progress='2' completion_time='0'/>"+
    			    		"<chunk achievement_id='203' progress='1' completion_time='0'/>"+
    			    		"<chunk achievement_id='413' progress='2' completion_time='0'/>"+
    			    		"<chunk achievement_id='499' progress='2' completion_time='0'/>"+
    			    	"</achievement>"+
    			    "</get_achievements>"+
    			"</query>"+
    			"</iq>"
    		)

        	client.send(get_cry_money)

    });
}