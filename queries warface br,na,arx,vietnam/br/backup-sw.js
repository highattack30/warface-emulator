var ltx = require('ltx');

function getChannel (get){
    if(get == 'pvp_newbie'){
        return get;
    }else{
        return "main_pve_1";
    }
}


exports.module = function(client, stz, channel) {
	
	var switchchannel = new ltx.Element('iq', { to: 'k01.warface', type: 'get'})
    .c('query', {xmlns: 'urn:cryonline:k01'}) 
    switchchannel.c('switch_channel', {version: '1.12600.570.21500', token: '', profile_id: '1', user_id: '0', region_id: 'global', resource: 'main_pve_6', build_type: '--release'})
        .c('character', {
            nick: 'setTimeout', 
            gender: 'male', 
            height: '1', 
            fatness: '0', 
            head: 'default_head_04', 
            current_class: '1', 
            experience: '0', 
            pvp_rating_points: '0', 
            banner_badge: '4294967295', 
            banner_mark: '4294967295', 
            banner_stripe: '4294967295'
        })
        
        .c('chat_channels')
            
            .c('chat', {
                channel: '0',
                channel_id: 'global.'+getChannel(channel), 
                service_id: 'conference.warface'
            }).up()
            
            .c('profile_progression_state', {
                profile_id: 1,
                mission_unlocked: 'none,trainingmission,all', 
                tutorial_unlocked: '1', 
                tutorial_passed: '0', 
                class_unlocked: '5'
            }).up()
            
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
    client.send(switchchannel)

}