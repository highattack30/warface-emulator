var ltx = require('ltx');
var Profile = require('../lib/db/profiles.js');

exports.module = function(client, stz, query) {
    Profile.findOne({username: client.jid.user}, function(err, profile_db) {
        gameroom_open = ltx.parse(
    		"<iq from='"+stz.attrs.to+"' to='"+stz.attrs.from+"' id='"+stz.attrs.id+"' type='get'>"+
    		"<query xmlns='urn:cryonline:k01'>"+
    			"<gameroom_setplayer>"+
    				"<game_room room_id='2' room_type='1'>"+
    				
	    				"<core teams_switched='0' room_name='Sala de jogo setTimeout' private='0' players='1' can_start='0' team_balanced='0' min_ready_players='0' revision='2'>"+
	    					
	    					"<players>"+
	    						"<player profile_id='"+profile_db.profileid+"' team_id='1' status='0' observer='0' skill='9.000' nickname='"+profile_db.nickname+"' clanName='' class_id='"+query.attrs.class_id+"' online_id='"+profile_db.username+"@warface/GameClient' group_id='48a38a20-706e-4c50-a6ac-19749502f548' presence='17' experience='"+profile_db.experience+"' rank='0' banner_badge='4294967295' banner_mark='4294967295' banner_stripe='1' region_id='global'/>"+
	    					"</players>"+
	    					
	    					"<playersReserved/>"+
	    					"<team_colors>"+
								"<team_color id='1' color='4294907157'/>"+
								"<team_color id='2' color='4279655162'/>"+
							"</team_colors>"+
						"</core>"+

						"<session id='1' status='0' game_progress='0' start_time='18446744011573962016' revision='2'/>"+
						"<custom_params friendly_fire='0' enemy_outlines='1' auto_team_balance='0' dead_can_chat='1' join_in_the_process='1' max_players='5' round_limit='0' class_restriction='253' inventory_slot='2113929215' revision='8'/>"+

						"<mission mission_key='fdeea025-2135-4c5b-ac93-483c26332454' no_teams='1' name='@na_mission_path01_1' setting='africa/africa_base' mode='pve' mode_name='@PvE_game_mode_desc' mode_icon='pve_icon' description='@mission_desc_africa_path' image='mapImgAfrica_training' difficulty='easy' type='trainingmission' time_of_day='9:06' revision='2'>"+
							"<objectives factor='1'>"+
								"<objective id='0' type='primary'/>"+
								"<objective id='17' type='secondary'/>"+
							"</objectives>"+
						"</mission>"+

						"<room_master master='"+profile_db.profileid+"' revision='10'/>"+

					"</game_room>"+
    			"</gameroom_setplayer>"+
    		"</query>"+
    		"</iq>"
    	)

        client.send(gameroom_open)
    });
}