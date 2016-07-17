var ltx = require('ltx');
var User = require('../lib/users.js');

exports.module = function(client, stz) {
    User.findOne({username: client.jid.user}, function(err, user_db) {
    	var join_channel = new ltx.Element('iq', { to: "ms.warface", type: 'get'})
    	.c('query', {xmlns: 'urn:cryonline:k01'})
    		join_channel.c('join_channel')
    		.c('character', {
    			nick: user_db.nickname, 
				gender: 'male', 
				height: '1', 
				fatness: '0', 
				head: 'default_head_04', 
				current_class: '0', 
				experience: '15659400', 
				pvp_rating_points: '0',
				banner_badge: '4294967295', 
				banner_mark: '4294967295', 
				banner_stripe: '10506', 
				game_money: '500000', 
				cry_money: '300000', 
				crown_money: '120000'
    		})

    		// Medkit Padrão
	        .c('item', { id:'1', name:'mk01', attached_to:'0', config:'dm=0;material=default;pocket_index=32768', slot:'163840', equipped:'8', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
	        // Claymore Padrão
	        .c('item', { id:'2', name:'claymoreexplosive', attached_to:'0', config:'dm=0;material=default;pocket_index=1048576', slot:'5242880', equipped:'16', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
	        // Granada Padrão
	        .c('item', { id:'3', name:'explosivegrenade', attached_to:'0', config:'dm=0;material=default;pocket_index=2163713', slot:'5411845', equipped:'29', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
	        // Executor Knife
	        .c('item', { id:'4', name:'kn01', attached_to:'0', config:'dm=0;material=default', slot:'4329476', equipped:'29', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
	        // 12 Padrão
	        .c('item', { id:'5', name:'shg01_default', attached_to:'0', config:'dm=0;material=default', slot:'32768', equipped:'8', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
	        // Snipe Padrão
	        .c('item', { id:'6', name:'sr02_default', attached_to:'0', config:'dm=0;material=default', slot:'1024', equipped:'4', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
	    	// Colete arma
	        .c('item', { id:'7', name:'shared_vest_02', attached_to:'0', config:'dm=0;material=default;pocket_index=0', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'1448236817', expiration_time_utc:'1471305600', seconds_left:'19815535'}).up()
	        // Smoker azul
	        .c('item', { id:'8', name:'smokegrenade04_c', attached_to:'0', config:'dm=0;material=;pocket_index=34818', slot:'743446', equipped:'13', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'1448236882', quantity:'1245'}).up()
	        // Flash
	        .c('item', { id:'9', name:'flashbang', attached_to:'0', config:'dm=0;material=;pocket_index=3147778', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'1448236898', expiration_time_utc:'1471305600', seconds_left:'19815535'}).up()
	        // Moedas de res
	        .c('item', { id:'10', name:'coin_01', attached_to:'0', config:'', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'1448236898', quantity:'5000'}).up()
	        
	        // Skins padrão
	        .c('item', { id:'11', name:'medic_helmet_01', attached_to:'0', config:'dm=0;material=default', slot:'393216', equipped:'8', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
        	.c('item', { id:'12', name:'medic_kneepads_01', attached_to:'0', config:'dm=0;material=default', slot:'294912', equipped:'8', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
        	.c('item', { id:'13', name:'sniper_helmet_01', attached_to:'0', config:'dm=0;material=default', slot:'12288', equipped:'4', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
        	.c('item', { id:'14', name:'sniper_kneepads_01', attached_to:'0', config:'dm=0;material=default', slot:'9216', equipped:'4', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
        	.c('item', { id:'15', name:'soldier_helmet_05', attached_to:'0', config:'dm=0;material=default', slot:'12', equipped:'1', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
        	.c('item', { id:'16', name:'soldier_kneepads_01', attached_to:'0', config:'dm=0;material=default', slot:'9', equipped:'1', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
        	.c('item', { id:'17', name:'engineer_helmet_01', attached_to:'0', config:'dm=0;material=default', slot:'12', equipped:'16', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
        	.c('item', { id:'18', name:'engineer_kneepads_01', attached_to:'0', config:'dm=0;material=default', slot:'9437184', equipped:'16', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
        	.c('item', { id:'19', name:'shared_hands_01', attached_to:'0', config:'dm=0;material=default', slot:'7576583', equipped:'29', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
        	.c('item', { id:'20', name:'shared_pants_01', attached_to:'0', config:'dm=0;material=default', slot:'19482642', equipped:'29', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
        	.c('item', { id:'21', name:'shared_jacket_01', attached_to:'0', config:'dm=0;material=default', slot:'14070797', equipped:'29', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
        	.c('item', { id:'22', name:'shared_shoes_01', attached_to:'0', config:'dm=0;material=default', slot:'17317904', equipped:'29', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
        	.c('item', { id:'23', name:'shared_vest_01', attached_to:'0', config:'dm=0;material=default', slot:'0', equipped:'29', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
       		
       		.c('profile_progression_state', {
            	profile_id: user_db.profileid,
           		mission_unlocked: 'none,trainingmission,easymission,normalmission,hardmission,survivalmission,zombieeasy,zombienormal,campaignsections,campaignsection1,campaignsection2,campaignsection3,volcanoeasy,volcanonormal,volcanohard,all', 
            	tutorial_unlocked: '7', 
            	tutorial_passed: '7', 
            	class_unlocked: '29'
        	}).up()
            
        	client.send(join_channel)

    });
}