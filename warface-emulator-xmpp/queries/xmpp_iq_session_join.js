var ltx = require('ltx');
var User = require('../lib/users.js');

exports.module = function(client, stz, query) {
    User.findOne({username: client.jid.user}, function(err, user_db) {
        var session_join = new ltx.Element('iq', {from: stz.attrs.to, to: stz.attrs.from, id: stz.attrs.id, type: 'get'})
        .c('query', {xmlns: 'urn:cryonline:k01'}) 
        session_join.c('session_join', {room_id:'2', server:'gameamazing', hostname:'192.168.25.65', port:'64013', local:'0', session_id:'1'})
        	.c('game_room', {room_id: '2', room_type: '1'})
        		.c('core', {teams_switched:'0', room_name: 'Teste de COOP', private:'1', players: '1', can_start: '0', team_balanced: '0', min_ready_players: '0', revision:'2'})
        			.c('players')
        				.c('player', {profile_id: user_db.profileid, team_id: '1', status: '2', observer: '0', skill: '9.000', nickname: 'setTimeout', clanName:'', class_id: '0', online_id: 'settimeout@warface/GameClient', group_id:'f640ca52-c89e-4e1e-9bcd-d078c457aa89', presence: '17', experience: '0', rank: '0', banner_badge: '4294967295', banner_mark: '4294967295', banner_stripe: '4294967295', region_id:'global'}).up()
        			.up()
        			.c('playersReserved').up()
        			.c('team_colors')
        				.c('team_color', {id: '1', color: '4294907157'}).up()
        				.c('team_color', {id: '2', color: '4279655162'}).up()
        			.up()
        			.up()
        			.c('session', {id: '1', status: '2', game_progress: '100', start_time: '1463532564', revision: '2'}).up()
        			.c('custom_params', { friendly_fire: '0', enemy_outlines: '1', auto_team_balance: '0', dead_can_chat: '1', join_in_the_process: '1', max_players: '5', round_limit: '0', class_restriction: '253', inventory_slot: '2113929215', revision: '2'}).up()
        			.c('mission', { // Introtução
			            mission_key: "24658104-a3c6-4235-a243-3027d828a161",
			            no_teams: "1",
			            name: "@na_mission_path01_1",
			            setting: "africa/africa_base",
			            mode: "pve",
			            mode_name: "@PvE_game_mode_desc",
			            mode_icon: "pve_icon",
			            description: "@mission_desc_africa_path",
			            image: "mapImgAfrica_training",
			            difficulty: "easy",
			            type: "trainingmission",
			            time_of_day: "9:06",
			            revision: '2'
			        })
			        
			        .c('objectives', {factor: '1'})
			            
			            .c('objective', {
			                id: 0,
			                type: "primary"
			            }).up()
			            
			            .c('objective', {
			                id: "10",
			                type: "secondary"
			            }).up()
			            
			            .c('objective', {
			                id: "14",
			                type: "secondary"
			            }).up()

			        .up()
			        .up()
        			.c('kick_vote_params', {success: '0.8', timeout: '60', cooldown: '300', revision: '1'}).up()
       				.c('room_master', {master: user_db.profileid, revision: '2'}).up()
        client.send(session_join)

    });
}