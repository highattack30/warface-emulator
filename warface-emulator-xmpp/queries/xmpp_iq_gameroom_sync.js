var ltx = require('ltx');
var Profile = require('../lib/db/profiles.js');

exports.module = function(client, stz, query) {
    Profile.findOne({username: client.jid.user}, function(err, profile_db) {
        gameroom_sync = ltx.parse(
    		"<iq from='k01.warface' to='rubens@warface/GameClient' type='get' id='3301609612'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<gameroom_sync>"+
                        "<game_room room_id='2' room_type='1'>"+
                            "<core teams_switched='0' room_name='setTimeout&apos;s GAME ROOM' private='0' players='1' can_start='0' team_balanced='1' min_ready_players='3' revision='16'>"+
                                "<players>"+
                                    "<player profile_id='"+profile_db.profileid+"' team_id='1' status='1' observer='0' skill='9.000' nickname='"+profile_db.nickname+"' clanName='' class_id='0' online_id='"+profile_db.username+"@warface/GameClient' group_id='' presence='17' experience='"+profile_db.experience+"' rank='55' banner_badge='4294967295' banner_mark='4294967295' banner_stripe='4294967295' region_id='global'/>"+
                                "</players>"+
                                "<playersReserved/>"+
                            "</core>"+
                        "</game_room>"+
                    "</gameroom_sync>"+
               "</query>"+
            "</iq>"
    	)

        client.send(gameroom_sync)
    });
}