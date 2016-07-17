var ltx = require('ltx');
var User = require('../lib/users.js');

exports.module = function(client, stz, channel) {
    User.findOne({username: client.jid.user}, function(err, user_db) {

    	if(channel === "pve"){
    		get_master_server = ltx.parse(
	            "<iq from='"+stz.attrs.to+"' to='"+stz.attrs.from+"' xml:lang='en' type='get'>"+
	                "<query xmlns='urn:cryonline:k01'>"+
	                    "<get_master_server resource='main_pve_6'  load_index='255'/>"+
	                "</query>"+
	            "</iq>"
        	)
        	client.send(get_master_server);
    	}else if(channel === "pvp_pro"){
    		get_master_server = ltx.parse(
                "<iq from='"+stz.attrs.to+"' to='"+stz.attrs.from+"' xml:lang='en' type='get'>"+
                    "<query xmlns='urn:cryonline:k01'>"+
                        "<get_master_server resource='main_pvp_pro_1'  load_index='255'/>"+
                    "</query>"+
                "</iq>"
            )
            client.send(get_master_server);
    	}else if(channel === "pvp_newbie"){
            get_master_server = ltx.parse(
                "<iq from='"+stz.attrs.to+"' to='"+stz.attrs.from+"' xml:lang='en' type='get'>"+
                    "<query xmlns='urn:cryonline:k01'>"+
                        "<get_master_server resource='main_pvp_newbie_1'  load_index='255'/>"+
                    "</query>"+
                "</iq>"
            )
            client.send(get_master_server);
        }

    });
}