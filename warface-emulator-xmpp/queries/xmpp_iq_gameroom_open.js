var ltx = require('ltx');
var Profile = require('../lib/db/profiles.js');

exports.module = function(client, stz, query) {
    Profile.findOne({username: client.jid.user}, function(err, profile_db) {
    	gameroom_open = ltx.parse(
    		"<iq from='"+stz.attrs.to+"' to='"+stz.attrs.from+"' id='"+stz.attrs.id+"' type='get'>"+
    		"<query xmlns='urn:cryonline:k01'>"+
    			"<gameroom_open>"+
    				"<game_room room_id='2' room_type='1'>"+
    				
	    				"<core teams_switched='0' room_name='"+query.room_name+"' private='0' players='1' can_start='0' team_balanced='"+query.auto_team_balance+"' min_ready_players='0' revision='2'>"+
	    					"<players>"+
	    						"<player profile_id='"+profile_db.profileid+"' team_id='1' status='1' observer='0' skill='9.000' nickname='"+profile_db.nickname+"' clanName='' class_id='0' online_id='"+profile_db.username+"@warface/GameClient' group_id='' presence='17' experience='"+profile_db.experience+"' rank='55' banner_badge='4294967295' banner_mark='4294967295' banner_stripe='4294967295' region_id='global'/>"+
	    					"</players>"+
	    					"<playersReserved/>"+
	    					"<team_colors>"+
								"<team_color id='1' color='4294907157'/>"+
								"<team_color id='2' color='4279655162'/>"+
							"</team_colors>"+
						"</core>"+

						"<session id='1' status='2' game_progress='0' start_time='18446744011573962016' revision='2'/>"+
						"<custom_params friendly_fire='"+query.friendly_fire+"' enemy_outlines='"+query.enemy_outlines+"' auto_team_balance='"+query.auto_team_balance+"' dead_can_chat='"+query.dead_can_chat+"' join_in_the_process='"+query.join_in_the_process+"' max_players='"+query.max_players+"' round_limit='"+query.round_limit+"' class_restriction='253' inventory_slot='"+query.inventory_slot+"' revision='2'/>"+

						"<mission mission_key='"+query.mission+"' no_teams='1' name='@na_mission_path01_1' setting='africa/africa_base' mode='pve' mode_name='@PvE_game_mode_desc' mode_icon='pve_icon' description='@mission_desc_africa_path' image='mapImgAfrica_training' difficulty='easy' type='trainingmission' time_of_day='9:06' revision='2'>"+
							"<objectives factor='1'>"+
								"<objective id='0' type='primary'/>"+
								"<objective id='17' type='secondary'/>"+
							"</objectives>"+
						"</mission>"+
						
						"<kick_vote_params success='0.8' timeout='60' cooldown='300' revision='1'/>"+
						"<room_master master='"+profile_db.profileid+"' revision='2'/>"+

					"</game_room>"+
    			"</gameroom_open>"+
    		"</query>"+
    		"</iq>"
    	)

        client.send(gameroom_open)

    });
}