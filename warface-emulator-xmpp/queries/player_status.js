var ltx = require('ltx');
var User = require('../lib/users.js');

exports.module = function(client, stz, query) {
	player_status = ltx.parse(
        "<iq from='k01.warface' type='get'>"+
            "<query xmlns='urn:cryonline:k01'>"+
                "<player_status prev_status='"+query.prev_status+"' new_status='"+query.new_status+"' to='"+query.to+"'/>"+
            "</query>"+
        "</iq>"
    )
    client.send(player_status); 
}