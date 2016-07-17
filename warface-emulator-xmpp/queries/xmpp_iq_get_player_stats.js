var ltx = require('ltx');
var User = require('../lib/users.js');

var now = new Date();
var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
var timestamp = startOfDay / 1000;

exports.module = function(client, stz) {
    User.findOne({username: client.jid.user}, function(err, user_db) {
    	var profile = new ltx.Element('iq', { to: 'ms.warface', type: 'get'})
	    .c('query', {xmlns: 'urn:cryonline:k01'})
	    profile.c('get_player_stats')
	    .c('stat', {stat: 'player_online_time', Value: timestamp}).up()
		//.c('stat', { stat:'player_gained_money', Value:'5703'}).up()
		.c('stat', { stat:'player_max_session_time', Value:'14608'}).up()
		.c('stat', { stat:'player_damage', Value:'132431'}).up()
		.c('stat', { stat:'player_max_damage', Value:'501'}).up()
		.c('stat', { stat:'player_climb_assists', Value:'16'}).up()
		.c('stat', { stat:'player_ammo_restored', Value:'68'}).up()
		.c('stat', { difficulty:'', mode:'PVP', stat:'player_sessions_won', Value:'15'}).up()
		.c('stat', { mode:'PVP', stat:'player_kill_streak', Value:'10'}).up()
		.c('stat', { mode:'PVP', stat:'player_kills_player', Value:'671'}).up()
		.c('stat', { mode:'PVP', stat:'player_sessions_lost_connection', Value:'32'}).up()
		.c('stat', { mode:'PVP', stat:'player_deaths', Value:'405'}).up()
		.c('stat', { class:'Rifleman', mode:'PVP', stat:'player_shots', Value:'1475'}).up()
		.c('stat', { class:'Rifleman', mode:'PVP', stat:'player_hits', Value:'283'}).up()
		.c('stat', { class:'Rifleman', mode:'PVP', stat:'player_headshots', Value:'7'}).up()
		.c('stat', { class:'Rifleman', mode:'PVP', stat:'player_playtime', Value:'11439'}).up()
		.c('stat', { stat:'player_heal', Value:'1575'}).up()
		.c('stat', { class:'Medic', mode:'PVP', stat:'player_shots', Value:'2530'}).up()
		.c('stat', { class:'Medic', mode:'PVP', stat:'player_hits', Value:'436'}).up()
		.c('stat', { class:'Medic', mode:'PVP', stat:'player_headshots', Value:'9'}).up()
		.c('stat', { class:'Medic', mode:'PVP', stat:'player_playtime', Value:'21427'}).up()
		.c('stat', { mode:'PVP', stat:'player_sessions_left', Value:'4'}).up()
		.c('stat', { class:'Engineer', mode:'PVP', stat:'player_shots', Value:'13808'}).up()
		.c('stat', { class:'Engineer', mode:'PVP', stat:'player_hits', Value:'2476'}).up()
		.c('stat', { class:'Engineer', mode:'PVP', stat:'player_playtime', Value:'133432'}).up()
		.c('stat', { stat:'player_repair', Value:'10507'}).up()
		.c('stat', { mode:'PVP', stat:'player_kills_claymore', Value:'46'}).up()
		.c('stat', { class:'Engineer', mode:'PVP', stat:'player_headshots', Value:'116'}).up()
		.c('stat', { stat:'player_climb_coops', Value:'8'}).up()
		.c('stat', { difficulty:'', mode:'PVP', stat:'player_sessions_lost', Value:'7'}).up()
		.c('stat', { stat:'player_resurrect_made', Value:'12'}).up()
		.c('stat', { stat:'player_resurrected_by_medic', Value:'8'}).up()
		.c('stat', { class:'Recon', mode:'PVP', stat:'player_shots', Value:'125'}).up()
		.c('stat', { class:'Recon', mode:'PVP', stat:'player_hits', Value:'34'}).up()
		.c('stat', { class:'Recon', mode:'PVP', stat:'player_playtime', Value:'6407'}).up()
		.c('stat', { difficulty:'', mode:'PVP', stat:'player_sessions_draw', Value:'3'}).up()
		.c('stat', { class:'Recon', mode:'PVP', stat:'player_headshots', Value:'2'}).up()
		.c('stat', { mode:'PVP', stat:'player_kills_player_friendly', Value:'2'}).up()
		.c('stat', { mode:'PVP', stat:'player_kills_melee', Value:'6'}).up()
		.c('stat', { class:'Rifleman', item_type:'ar03_shop', stat:'player_wpn_usage', Value:'9531'}).up()
		.c('stat', { class:'Medic', item_type:'shg13_shop', stat:'player_wpn_usage', Value:'11488'}).up()
		.c('stat', { class:'Engineer', item_type:'smg24_shop', stat:'player_wpn_usage', Value:'69824'}).up()
		.c('stat', { class:'Recon', item_type:'sr09_lava01_shop', stat:'player_wpn_usage', Value:'3701'}).up()
	    client.send(profile)
    });
}