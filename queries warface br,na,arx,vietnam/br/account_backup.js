var ltx = require('ltx');
var get_master_servers = require('./masterservers');
var SwitchChannel   = require('./switchchannel');
var GetConfig = require('./getconfig');
var Items = require('./items');
var SetConfig = require('./settings');

var random = Math.floor((Math.random() * 100000000000000) + 1);

function stringGen(len){ 
    var text = "";
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
}

exports.module = function(client, stz) {

    Items.module(client);

    var profile = new ltx.Element('iq', { to:'ms.warface', type:'get' })
    .c('query', {xmlns: 'urn:cryonline:k01'}) 
        profile.c('get_account_profiles')
            .c('profile', {id: "1", nickname:"setTimeout"}).up()
        client.send(profile)

    var account = new ltx.Element('iq', { from: stz.attrs.to, type:'get' })
    .c('query', {xmlns: 'urn:cryonline:k01'}) 
        account.c('account', {
            user: '10',
            active_token: '$WF_10_'+random+'_'+stringGen(16),
            survival_lb_enabled: '1',
            load_balancing_type: 'server'
        })
    client.send(account)

    get_master_servers.module(client);

    var server = new ltx.Element('iq', { to: 'k01.warface', type: 'get'})
    .c('query', {xmlns: 'urn:cryonline:k01'})
    server.c('get_master_server', {
        resource: 'main_pve_6',
        load_index: '244'
    })
    client.send(server)

    //SwitchChannel.module(client, stz);

    var setcharacter = new ltx.Element('iq', { to: 'ms.warface', type: 'get'})
    .c('query', {xmlns: 'urn:cryonline:k01'})
    setcharacter.c('resync_profile')
    .c('item', { id:'111921546', name:'mk01', attached_to:'0', config:'dm=0;material=default;pocket_index=32768', slot:'163840', equipped:'8', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'111921547', name:'claymoreexplosive', attached_to:'0', config:'dm=0;material=default;pocket_index=1048576', slot:'5242880', equipped:'16', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'111921548', name:'explosivegrenade', attached_to:'0', config:'dm=0;material=default;pocket_index=2163713', slot:'5411845', equipped:'29', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'111921549', name:'ar03_shop', attached_to:'0', config:'dm=0;material=default;pocket_index=0', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'1', buy_time_utc:'1448236817', expiration_time_utc:'1460471982', seconds_left:'0'}).up()
    .c('item', { id:'111921550', name:'shared_vest_02', attached_to:'0', config:'dm=0;material=default;pocket_index=0', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'1', buy_time_utc:'1448236817', expiration_time_utc:'1448323217', seconds_left:'0'}).up()
    .c('item', { id:'111921551', name:'smokegrenade04_c', attached_to:'0', config:'dm=0;material=;pocket_index=34818', slot:'743446', equipped:'13', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'1448236882', quantity:'12'}).up().c('item', { id:'111921552', name:'coin_01', attached_to:'0', config:'', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'1448236898', quantity:'16'}).up()
    .c('item', { id:'111921553', name:'smg24_shop', attached_to:'0', config:'dm=0;material=default;pocket_index=0', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'1', buy_time_utc:'1448236898', expiration_time_utc:'1448496098', seconds_left:'0'}).up()
    .c('item', { id:'111921554', name:'flashbang', attached_to:'0', config:'dm=0;material=;pocket_index=3147778', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'1', buy_time_utc:'1448236898', expiration_time_utc:'1449360098', seconds_left:'0'}).up()
    .c('item', { id:'111921555', name:'box_token_cry_money_01', attached_to:'0', config:'', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'1448236882', quantity:'5'}).up()
    .c('item', { id:'111921556', name:'claymoreexplosive04_c', attached_to:'0', config:'dm=0;material=;pocket_index=1049600', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'1', buy_time_utc:'1448236912', quantity:'0'}).up()
    .c('item', { id:'111921557', name:'shg11_shop', attached_to:'0', config:'dm=0;material=default;pocket_index=0', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'1', buy_time_utc:'1448237714', expiration_time_utc:'1448334914', seconds_left:'0'}).up()
    .c('item', { id:'111921558', name:'shg13_shop', attached_to:'0', config:'dm=0;material=default;pocket_index=0', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'1', buy_time_utc:'1448237923', expiration_time_utc:'1448335123', seconds_left:'0'}).up()
    .c('item', { id:'111921559', name:'pt02_shop', attached_to:'0', config:'dm=0;material=default;pocket_index=0', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'1', buy_time_utc:'1448237923', expiration_time_utc:'1448324323', seconds_left:'0'}).up()
    .c('item', { id:'111921560', name:'pt27_shop', attached_to:'0', config:'dm=0;material=default;pocket_index=0', slot:'3247107', equipped:'29', default:'0', permanent:'1', expired_confirmed:'0', buy_time_utc:'1448237984', total_durability_points:'36000', durability_points:'35118', repair_cost:'98'}).up()
    .c('item', { id:'111921561', name:'smg13_shop', attached_to:'0', config:'dm=0;material=default;pocket_index=0', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'1', buy_time_utc:'1448238033', expiration_time_utc:'1448324433', seconds_left:'0'}).up()
    .c('item', { id:'111921562', name:'smg02_shop', attached_to:'0', config:'dm=0;material=default;pocket_index=0', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'1', buy_time_utc:'1448239350', expiration_time_utc:'1448325750', seconds_left:'0'}).up()
    .c('item', { id:'111921563', name:'shared_shoes_05', attached_to:'0', config:'dm=0;material=default;pocket_index=0', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'1', buy_time_utc:'1448239350', expiration_time_utc:'1448325750', seconds_left:'0'}).up()
    .c('item', { id:'111921564', name:'explosivegrenade02_c', attached_to:'0', config:'dm=0;material=;pocket_index=2162689', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'1', buy_time_utc:'1448239406', quantity:'0'}).up()
    .c('item', { id:'111921565', name:'pt01_default', attached_to:'0', config:'dm=0;material=default;pocket_index=0', slot:'0', equipped:'0', default:'0', permanent:'1', expired_confirmed:'0', buy_time_utc:'1448239423', total_durability_points:'36000', durability_points:'71246'}).up()
    .c('item', { id:'111921566', name:'mission_access_token_04', attached_to:'0', config:'', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'1448243733', quantity:'10'}).up()
    .c('item', { id:'111921567', name:'smokegrenade_hlw01', attached_to:'0', config:'dm=0;material=;pocket_index=98304', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'1', buy_time_utc:'1448243733', expiration_time_utc:'1449453333', seconds_left:'0'}).up()
    .c('item', { id:'111921568', name:'shared_helmet_hlw_03', attached_to:'0', config:'dm=0;material=default;pocket_index=0', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'1', buy_time_utc:'1448300917', expiration_time_utc:'1449510517', seconds_left:'0'}).up()
    .c('item', { id:'111921569', name:'sr16_shop', attached_to:'0', config:'dm=0;material=default;pocket_index=0', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'1', buy_time_utc:'1448305893', expiration_time_utc:'1448392293', seconds_left:'0'}).up()
    .c('item', { id:'111921570', name:'explosivegrenade01_hlw01', attached_to:'0', config:'dm=0;material=;pocket_index=1115137', slot:'23812118', equipped:'29', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'1448417906', quantity:'14'}).up()
    .c('item', { id:'111921571', name:'kn04_hlw01', attached_to:'0', config:'', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'1', buy_time_utc:'1448504070', expiration_time_utc:'1448936070', seconds_left:'0'}).up()
    .c('item', { id:'111921572', name:'sr08_shop', attached_to:'0', config:'', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'1', buy_time_utc:'1460212782', expiration_time_utc:'1460471982', seconds_left:'0'}).up()
    .c('item', { id:'111922988', name:'ar05_shop', attached_to:'0', config:'', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'1461635445', expiration_time_utc:'1463332317', seconds_left:'62153'}).up()
    .c('item', { id:'113341279', name:'engineer_helmet_lava_01', attached_to:'0', config:'dm=0;material=default;pocket_index=0', slot:'12582912', equipped:'16', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'1462470838', expiration_time_utc:'1464285238', seconds_left:'1015074'}).up()
    .c('item', { id:'113621178', name:'smg25_lava01_shop', attached_to:'0', config:'dm=0;material=lava01;pocket_index=0', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'1', buy_time_utc:'1462579282', expiration_time_utc:'1463184082', seconds_left:'0'}).up()
    .c('item', { id:'114640271', name:'sr09_lava01_shop', attached_to:'0', config:'dm=0;material=lava01;pocket_index=0', slot:'1024', equipped:'4', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'1463070511', expiration_time_utc:'1463675311', seconds_left:'405147'}).up()
    .c('item', { id:'114647635', name:'shared_vest_06', attached_to:'0', config:'dm=0;material=default;pocket_index=0', slot:'18400273', equipped:'29', default:'0', permanent:'1', expired_confirmed:'0', buy_time_utc:'1463072417', total_durability_points:'36000', durability_points:'35528', repair_cost:'12'}).up()
    .c('item', { id:'115206209', name:'sniper_helmet_lava_01', attached_to:'0', config:'', slot:'0', equipped:'0', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'1463270123', expiration_time_utc:'1463874923', seconds_left:'604759'}).up()
    .c('item', { id:'18446744073709551170', name:'kn01', attached_to:'0', config:'dm=0;material=default', slot:'4329476', equipped:'29', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551175', name:'pt05_shop', attached_to:'0', config:'dm=0;material=default', slot:'0', equipped:'0', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551214', name:'ar02_shop', attached_to:'0', config:'dm=0;material=default', slot:'1', equipped:'1', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551287', name:'sr02_default', attached_to:'0', config:'dm=0;material=default', slot:'0', equipped:'0', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551210', name:'smg04_shop', attached_to:'0', config:'dm=0;material=default', slot:'1048576', equipped:'16', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551289', name:'shg01_default', attached_to:'0', config:'dm=0;material=default', slot:'32768', equipped:'8', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551278', name:'df01', attached_to:'0', config:'dm=0;material=default', slot:'65536', equipped:'8', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551173', name:'ap01', attached_to:'0', config:'dm=0;material=default', slot:'2', equipped:'1', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up().c('item', { id:'18446744073709551301', name:'ak01', attached_to:'0', config:'dm=0;material=default', slot:'2097152', equipped:'16', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551360', name:'medic_helmet_01', attached_to:'0', config:'dm=0;material=default', slot:'393216', equipped:'8', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551394', name:'medic_kneepads_01', attached_to:'0', config:'dm=0;material=default', slot:'294912', equipped:'8', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551437', name:'sniper_helmet_01', attached_to:'0', config:'dm=0;material=default', slot:'12288', equipped:'4', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551354', name:'sniper_kneepads_01', attached_to:'0', config:'dm=0;material=default', slot:'9216', equipped:'4', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551405', name:'soldier_helmet_05', attached_to:'0', config:'dm=0;material=default', slot:'12', equipped:'1', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551367', name:'soldier_kneepads_01', attached_to:'0', config:'dm=0;material=default', slot:'9', equipped:'1', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551365', name:'engineer_helmet_01', attached_to:'0', config:'dm=0;material=default', slot:'0', equipped:'0', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551448', name:'engineer_kneepads_01', attached_to:'0', config:'dm=0;material=default', slot:'9437184', equipped:'16', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551450', name:'shared_hands_01', attached_to:'0', config:'dm=0;material=default', slot:'7576583', equipped:'29', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551411', name:'shared_pants_01', attached_to:'0', config:'dm=0;material=default', slot:'19482642', equipped:'29', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551385', name:'shared_jacket_01', attached_to:'0', config:'dm=0;material=default', slot:'14070797', equipped:'29', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551440', name:'shared_shoes_01', attached_to:'0', config:'dm=0;material=default', slot:'17317904', equipped:'29', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551428', name:'shared_vest_01', attached_to:'0', config:'dm=0;material=default', slot:'0', equipped:'0', default:'1', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551604', name:'rds03', attached_to:'0', config:'', slot:'655360', equipped:'8', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551596', name:'gp03', attached_to:'0', config:'', slot:'21647380', equipped:'29', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551589', name:'sc02', attached_to:'0', config:'', slot:'21647380', equipped:'29', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551563', name:'sc05', attached_to:'0', config:'', slot:'20', equipped:'1', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551539', name:'rds01', attached_to:'0', config:'', slot:'21647380', equipped:'29', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551536', name:'as06', attached_to:'0', config:'', slot:'20971520', equipped:'16', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('item', { id:'18446744073709551508', name:'sc01', attached_to:'0', config:'', slot:'20971520', equipped:'16', default:'0', permanent:'0', expired_confirmed:'0', buy_time_utc:'0', expiration_time_utc:'0', seconds_left:'0'}).up()
    .c('unlocked_item', {id: '1'}).up()
    .c('unlocked_item', {id: '2'}).up()
    .c('unlocked_item', {id: '3'}).up()
    .c('unlocked_item', {id: '4'}).up()
    .c('unlocked_item', {id: '5'}).up()
    .c('unlocked_item', {id: '6'}).up()
    .c('unlocked_item', {id: '7'}).up()
    .c('unlocked_item', {id: '8'}).up()
    .c('unlocked_item', {id: '9'}).up()
    .c('unlocked_item', {id: '10'}).up()
    .c('unlocked_item', {id: '11'}).up()
    .c('unlocked_item', {id: '12'}).up()
    .c('unlocked_item', {id: '13'}).up()
    .c('unlocked_item', {id: '14'}).up()
    .c('unlocked_item', {id: '15'}).up()
    .c('unlocked_item', {id: '16'}).up()
    .c('unlocked_item', {id: '17'}).up()
    .c('unlocked_item', {id: '18'}).up()
    .c('unlocked_item', {id: '19'}).up()
    .c('unlocked_item', {id: '20'}).up()
    .c('unlocked_item', {id: '21'}).up()
    .c('unlocked_item', {id: '22'}).up()
    .c('unlocked_item', {id: '23'}).up()
    .c('unlocked_item', {id: '24'}).up()
    .c('unlocked_item', {id: '25'}).up()
    .c('unlocked_item', {id: '26'}).up()
    .c('unlocked_item', {id: '27'}).up()
    .c('unlocked_item', {id: '28'}).up()
    .c('unlocked_item', {id: '29'}).up()
    .c('unlocked_item', {id: '30'}).up()
    .c('unlocked_item', {id: '31'}).up()
    .c('unlocked_item', {id: '32'}).up()
    .c('unlocked_item', {id: '33'}).up()
    .c('unlocked_item', {id: '34'}).up()
    .c('unlocked_item', {id: '35'}).up()
    .c('unlocked_item', {id: '36'}).up()
    .c('unlocked_item', {id: '37'}).up()
    .c('unlocked_item', {id: '38'}).up()
    .c('unlocked_item', {id: '39'}).up()
    .c('unlocked_item', {id: '40'}).up()
    .c('unlocked_item', {id: '41'}).up()
    .c('unlocked_item', {id: '42'}).up()
    .c('unlocked_item', {id: '43'}).up()
    .c('unlocked_item', {id: '44'}).up()
    .c('unlocked_item', {id: '45'}).up()
    .c('unlocked_item', {id: '46'}).up()
    .c('unlocked_item', {id: '47'}).up()
    .c('money', {game_money: '545411', cry_money: '300000', crown_money: '80000'}).up()
    .c('character', { 
        nick: 'setTimeout',
        gender: 'male', 
        height: '1', 
        fatness: '0', 
        head: 'default_head_05', 
        current_class: '0', 
        experience: '3000000', 
        pvp_rating_points: '0', 
        banner_badge: '4294967295', 
        banner_mark: '4294967295', 
        banner_stripe: '4294967295'
    }).up()
    .c('progression')
        .c('profile_progression_state', {
            profile_id: '1', 
            mission_unlocked: 'none,trainingmission,zombieeasy,zombienormal,volcanoeasy,volcanonormal,all', 
            tutorial_unlocked: '7', 
            tutorial_passed: '7', 
            class_unlocked: '29',
        }).up()
    .up()
    .up()
    .c('variables')
                .c('item', {key:'cvar:net_packetsendrate', value:'30'}).up()
                .c('item', {key:'cvar:cl_packetrate', value:'30'}).up()
                .c('item', {key:'max_xp_boost_effect', value:'3.45'}).up()
                .c('item', {key:'max_vp_boost_effect', value:'2.45'}).up()
                .c('item', {key:'max_gm_boost_effect', value:'3.05'}).up()
                .c('item', {key:'max_ic_boost_effect', value:'1'}).up()
                .c('item', {key:'randombox.offers_count', value:'5'}).up()
                .c('item', {key:'url.charge_account', value:'http://www.levelupgames.com.br/redirecionador/warface/pagina/compre-cash'}).up()
                .c('item', {key:'url.online_help', value:'http://warface.uol.com.br/guia-do-jogo.lhtml'}).up()
                .c('item', {key:'url.charge_account.charge_by_external_app', value:'1'}).up()
                .c('item', {key:'url.charge_account.width', value:'540'}).up()
                .c('item', {key:'url.charge_account.height', value:'545'}).up()
                .c('item', {key:'dailycompetition.rewardPlayersCount', value:'1000'}).up()
                .c('item', {key:'clans.clan_item', value:'clan_creation_item_01'}).up()
                .c('item', {key:'clans.min_name_size', value:'4'}).up()
                .c('item', {key:'clans.max_name_size', value:'16'}).up()
                .c('item', {key:'clans.enable_chat', value:'1'}).up()
                .c('item', {key:'chat.enable_reference', value:'1'}).up()
                .c('item', {key:'quickplay.is_light_mode_filter', value:'0'}).up()
                .c('item', {key:'quickplay.newbie_channel_conf', value:'quickplay_only'}).up()
                .c('item', {key:'quickplay.skilled_channel_conf', value:'quickplay_default'}).up()
                .c('item', {key:'quickplay.pro_channel_conf', value:'quickplay_default'}).up()
                .c('item', {key:'friends.limit', value:'50'}).up()
                .c('item', {key:'room.server_allocation_timeout', value:'10'}).up()
                .c('item', {key:'max_newbie', value:'10'}).up()
                .c('item', {key:'max_skilled', value:'30'}).up()
                .c('item', {key:'min_online_users', value:'0'}).up()
                .c('item', {key:'shop.maxbatchsize', value:'5'}).up()
                .c('item', {key:'autorepair_equipment', value:'1'}).up()
                .c('item', {key:'cvar:ui_money_refill_enable', value:'1'}).up()
                .c('item', {key:'cvar:ui_money_refill_min_rank', value:'10'}).up()
                .c('item', {key:'cvar:ui_money_refill_min_repair_percent', value:'70'}).up()
                .c('item', {key:'cvar:ui_lobby_rating_tab_min_rank', value:'41'}).up()
                .c('item', {key:'cvar:ui_lobby_rating_tab_enabled', value:'1'}).up()
                .c('item', {key:'cvar:ui_show_average_searching_time', value:'0'}).up()
                .c('item', {key:'cvar:online_newbie_rank', value:'5'}).up()
                .c('item', {key:'cvar:cl_autostart_room', value:'1'}).up()
                .c('item', {key:'cvar:cl_autostart_pve_room', value:'1'}).up()
                .c('item', {key:'cvar:cl_quickplay_channel_switching', value:''}).up()
                .c('item', {key:'cvar:cl_quickplay_gamemode_based', value:'0'}).up()
                .c('item', {key:'cvar:cl_statistic_flush_period', value:'120'}).up()
                .c('item', {key:'cvar:cl_updateBanners', value:'1'}).up()
                .c('item', {key:'cvar:cl_enableBanners', value:'1'}).up()
                .c('item', {key:'cvar:g_pve_mission_access_limitation_enabled', value:'1'}).up()
                .c('item', {key:'cvar:g_contracts_set_size', value:'3'}).up()
                .c('item', {key:'cvar:g_zoom_speed_multiplier', value:'0.6'}).up()
                .c('item', {key:'cvar:ui_preinvite_enabled', value:'1'}).up()
                .c('item', {key:'cvar:g_preinvite_max_rating_group_size', value:'5'}).up()
                .c('item', {key:'cvar:cl_overwolf', value:'1'}).up()
                .c('item', {key:'cvar:g_enable_function_time_collector', value:'1'}).up()
                .c('item', {key:'cvar:g_clientDfConeAngle', value:'70'}).up()
                .c('item', {key:'cvar:cl_shop_skin_validation_enabled', value:'0'}).up()
                .c('item', {key:'cvar:e_ParticlesPreload', value:'0'}).up()
                .c('item', {key:'cvar:s_OGGStreaming', value:'1'}).up()
                .c('item', {key:'cvar:s_SoundMoods', value:'0'}).up()
                .c('item', {key:'cvar:cl_payment_enabled', value:'0'}).up()
    client.send(setcharacter)
    GetConfig.module(client);

    var profile = new ltx.Element('iq', { to:'ms.warface', type:'get' })
    .c('query', {xmlns: 'urn:cryonline:k01'}) 
    profile.c('get_account_profiles')
    client.send(profile)

}