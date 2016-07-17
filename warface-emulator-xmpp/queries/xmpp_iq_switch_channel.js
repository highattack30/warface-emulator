var ltx = require('ltx');
var Profile = require('../lib/db/profiles.js');

exports.module = function(client, stz, query) {
    Profile.findOne({username: client.jid.user}, function(err, profile_db) {
        
        switch_channel = ltx.parse(
                "<iq to='ms.warface' type='get'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                "<switch_channel>"+
                "<character nick='"+profile_db.nickname+"' gender='"+profile_db.gender+"' height='"+profile_db.height+"' fatness='0' head='"+profile_db.head+"' current_class='"+profile_db.current_class+"' experience='100' pvp_rating_points='"+profile_db.pvp_rating_points+"' banner_badge='"+profile_db.banner_badge+"' banner_mark='"+profile_db.banner_mark+"' banner_stripe='"+profile_db.banner_stripe+"'>"+

                    // Global chat
                    "<chat_channels>"+
                        "<chat channel='0' channel_id='"+query.region_id+"."+query.resource+"' service_id='conference.warface'/>"+
                    "</chat_channels>"+
                            
                    // Progression
                    "<profile_progression_state profile_id='"+profile_db.profileid+"' mission_unlocked='none,trainingmission,all' tutorial_unlocked='7' tutorial_passed='7' class_unlocked='29' />"+
                    
                    "<login_bonus current_streak='0' current_reward='0'/>"+
                    
                    "<variables>"+
                        '<item key="cvar:net_packetsendrate" value="30" />'+
                        '<item key="cvar:cl_packetrate" value="30" />'+
                        '<item key="max_xp_boost_effect" value="3.45" />'+
                        '<item key="max_vp_boost_effect" value="2.45" />'+
                        '<item key="max_gm_boost_effect" value="3.05" />'+
                        '<item key="max_ic_boost_effect" value="1" />'+
                        '<item key="randombox.offers_count" value="5" />'+
                        '<item key="url.charge_account" value="http://www.levelupgames.com.br/redirecionador/warface/pagina/compre-cash" />'+
                        '<item key="url.online_help" value="http://warface.uol.com.br/guia-do-jogo.lhtml" />'+
                        '<item key="url.charge_account.charge_by_external_app" value="1" />'+
                        '<item key="url.charge_account.width" value="540" />'+
                        '<item key="url.charge_account.height" value="545" />'+
                        '<item key="dailycompetition.rewardPlayersCount" value="1000" />'+
                        '<item key="clans.clan_item" value="clan_creation_item_01" />'+
                        '<item key="clans.min_name_size" value="4" />'+
                        '<item key="clans.max_name_size" value="16" />'+
                        '<item key="clans.enable_chat" value="1" />'+
                        '<item key="chat.enable_reference" value="1" />'+
                        '<item key="quickplay.is_light_mode_filter" value="0" />'+
                        '<item key="quickplay.newbie_channel_conf" value="quickplay_only" />'+
                        '<item key="quickplay.skilled_channel_conf" value="quickplay_default" />'+
                        '<item key="quickplay.pro_channel_conf" value="quickplay_default" />'+
                        '<item key="friends.limit" value="50" />'+
                        '<item key="room.server_allocation_timeout" value="10" />'+
                        '<item key="max_newbie" value="10" />'+
                        '<item key="max_skilled" value="30" />'+
                        '<item key="min_online_users" value="0" />'+
                        '<item key="shop.maxbatchsize" value="5" />'+
                        '<item key="autorepair_equipment" value="1" />'+
                        '<item key="cvar:ui_money_refill_enable" value="1" />'+
                        '<item key="cvar:ui_money_refill_min_rank" value="10" />'+
                        '<item key="cvar:ui_money_refill_min_repair_percent" value="70" />'+
                        '<item key="cvar:ui_lobby_rating_tab_min_rank" value="41" />'+
                        '<item key="cvar:ui_lobby_rating_tab_enabled" value="1" />'+
                        '<item key="cvar:ui_show_average_searching_time" value="0" />'+
                        '<item key="cvar:online_newbie_rank" value="5" />'+
                        '<item key="cvar:cl_autostart_room" value="1" />'+
                        '<item key="cvar:cl_autostart_pve_room" value="1" />'+
                        '<item key="cvar:cl_quickplay_channel_switching" value="" />'+
                        '<item key="cvar:cl_quickplay_gamemode_based" value="0" />'+
                        '<item key="cvar:cl_statistic_flush_period" value="120" />'+
                        '<item key="cvar:cl_updateBanners" value="1" />'+
                        '<item key="cvar:cl_enableBanners" value="1" />'+
                        '<item key="cvar:g_pve_mission_access_limitation_enabled" value="1" />'+
                        '<item key="cvar:g_contracts_set_size" value="3" />'+
                        '<item key="cvar:g_zoom_speed_multiplier" value="0.6" />'+
                        '<item key="cvar:ui_preinvite_enabled" value="1" />'+
                        '<item key="cvar:g_preinvite_max_rating_group_size" value="5" />'+
                        '<item key="cvar:cl_overwolf" value="1" />'+
                        '<item key="cvar:g_enable_function_time_collector" value="1" />'+
                        '<item key="cvar:g_clientDfConeAngle" value="70" />'+
                        '<item key="cvar:cl_shop_skin_validation_enabled" value="0" />'+
                        '<item key="cvar:e_ParticlesPreload" value="0" />'+
                        '<item key="cvar:s_OGGStreaming" value="1" />'+
                        '<item key="cvar:s_SoundMoods" value="0" />'+
                        //'<item key="cvar:cl_payment_enabled" value="0" />'+
                    '</variables>'+

                "</character>"+
                "</switch_channel>"+
                "</query>"+
                "</iq>"
            )

            client.send(switch_channel)

    });
}