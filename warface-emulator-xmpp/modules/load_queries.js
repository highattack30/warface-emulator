var xmpp = require('node-xmpp');
var ltx = require('ltx');
var colors = require('colors');

// Queries modules list
var account = require('../queries/xmpp_iq_account');
var create_profile = require('../queries/xmpp_iq_create_profile');
var get_account_profiles = require('../queries/xmpp_iq_get_account_profiles');
var get_master_server = require('../queries/xmpp_iq_get_master_server');
var get_master_servers = require('../queries/xmpp_iq_get_master_servers');
var join_channel = require('../queries/xmpp_iq_join_channel');
var switch_channel = require('../queries/xmpp_iq_switch_channel');
var missions_get_list = require('../queries/xmpp_iq_missions_get_list');
var quickplay_maplist = require('../queries/xmpp_iq_quickplay_maplist');
var items = require('../queries/xmpp_iq_items');
var shop_get_offers = require('../queries/xmpp_iq_shop_get_offers');
var get_configs = require('../queries/xmpp_iq_get_configs');
var persistent_settings_get = require('../queries/xmpp_iq_persistent_settings_get');
var get_player_stats = require('../queries/xmpp_iq_get_player_stats');
var gameroom_open = require('../queries/xmpp_iq_gameroom_open');
var session_join = require('../queries/xmpp_iq_session_join');
var get_cry_money = require('../queries/xmpp_iq_get_cry_money');
var gameroom_setplayer = require('../queries/xmpp_iq_gameroom_setplayer');
var gameroom_sync = require('../queries/xmpp_iq_gameroom_sync');
var player_status = require('../queries/player_status');
var get_contracts = require('../queries/xmpp_iq_get_contracts');
var get_expired_items = require('../queries/xmpp_iq_get_expired_items');
var get_achievements = require('../queries/xmpp_iq_get_achievements');
var channel_logout = require('../queries/xmpp_iq_channel_logout');
var clan_list = require('../queries/xmpp_iq_clan_list');
var get_profile_performance = require('../queries/xmpp_iq_get_profile_performance');
var shop_buy_multiple_offer = require('../queries/xmpp_iq_shop_buy_multiple_offer');
var shop_buy_offer = require('../queries/xmpp_iq_shop_buy_offer');
var friend_list = require('../queries/xmpp_iq_friend_list');

//friend_list.module('client', 'stz');

exports.configure = function(server, config) {
    server.on('connect', function(client) {
        client.on('stanza', function(stz) {
            
            if (stz.is('iq')) {
                if(stz.attrs.type === "get" && stz.getChild('query', "urn:cryonline:k01")){
                    
                    var query = stz.getChild('query', "urn:cryonline:k01").children[0];

                    switch(query.name){
                        case 'account':
                            account.module(client, stz);
                            //friend_list.module(client, stz);

                            // clan_chat = ltx.parse("<iq from='"+stz.attrs.to+"' to='"+stz.attrs.from+"' xml:lang='en' type='get'>"+
                            //     "<query xmlns='urn:cryonline:k01'>"+
                            //         "<lobbychat_getchannelid channel='3' channel_id='clan.1' service_id='conference.warface'/>"+
                            //     "</query>"+
                            // "</iq>");
                            // client.send(clan_chat);

                            clan_n = ltx.parse("<iq from='"+stz.attrs.to+"' to='"+stz.attrs.from+"' xml:lang='en' type='get'>"+
                                "<query xmlns='urn:cryonline:k01'>"+
                                    "<clan_info>"+
                                        "<clan name='Privado' clan_id='1' description='' creation_date='1463967639' master='Rubens' clan_points='0' members='1' master_badge='4294967295' master_stripe='7507' master_mark='4294967295' leaderboard_position='36428'>"+
                                            "<clan_member_info nickname='Rubens' profile_id='250038' experience='8092800' clan_points='0' invite_date='1463967786' clan_role='1' jid='' status='1'/>"+
                                            //"<clan_member_info nickname='Panda' profile_id='2530939' experience='86278' clan_points='0' invite_date='1463967639' clan_role='2' jid='' status='0'/>"+
                                        "</clan>"+
                                    "</clan_info>"+
                                "</query>"+
                            "</iq>");
                            client.send(clan_n);
                            
                            break;
                        case 'get_account_profiles':
                            get_account_profiles.module(client, stz);
                            break;
                        case 'join_channel':
                            join_channel.module(client, stz, query.attrs);
                            break;
                        case 'persistent_settings_get':
                            persistent_settings_get.module(client, stz);
                            break;
                        case 'get_master_server':
                            get_master_server.module(client, stz, query.attrs.channel);
                            break;
                        case 'switch_channel':
                            switch_channel.module(client, stz, query.attrs);
                            break;
                        case 'get_cry_money':
                            get_cry_money.module(client, stz);
                            break;
                        case 'get_player_stats':
                            get_player_stats.module(client, stz);
                            break;
                        case 'player_status':
                            player_status.module(client, stz, query.attrs);
                            break;
                        case 'get_configs':
                            get_configs.module(client, stz);
                            break;
                        case 'shop_get_offers':
                            shop_get_offers.module(client, stz);
                            break;
                        case 'missions_get_list':
                            missions_get_list.module(client, stz);
                            break;
                        case 'get_contracts':
                            get_contracts.module(client, stz);
                            break;
                        case 'get_master_servers':
                            get_master_servers.module(client, stz);
                            break;
                        case 'get_expired_items':
                            get_expired_items.module(client, stz);
                            break;
                        case 'get_achievements':
                            get_achievements.module(client, stz);
                            break;
                        case 'channel_logout':
                            //channel_logout.module(client, stz);
                            break;
                        case 'clan_list':
                            clan_list.module(client, stz);
                            break;
                        case 'get_profile_performance':
                            get_profile_performance.module(client, stz);
                            break;
                        case 'shop_buy_multiple_offer':
                            shop_buy_multiple_offer.module(client, stz, query);
                            break;
                        case 'shop_buy_offer':
                            shop_buy_offer.module(client, stz, query);
                            break;
                        case 'gameroom_open':
                            gameroom_open.module(client, stz, query);
                            break;
                        case 'gameroom_setplayer':
                            
                            gameroom_setplayer.module(client, stz, query);

                            //console.log(stz.toString(), '\n');

                            var setserver = new ltx.Element('iq', {from: "dedicated@warface/GameClient", to: stz.attrs.from, type: 'get'})
                            .c('query', {xmlns: 'urn:cryonline:k01'}) 
                                setserver.c('setserver', {
                                    host: 'gameamazing',
                                    mission_key: "24658104-a3c6-4235-a243-3027d828a161",
                                    node: 'http://camaya.net/gloox',
                                    ver: '0RyJmsC2EQAjYmYlhkMGaVEgE/8=',
                                    version: '1.12600.570.21500',
                                    session_id: '1',
                                    cpu_usage: '0',
                                    mode: 'pvp_pve',
                                    port: '64089',
                                    status: '2',
                                    build_type: '--release',
                                    region_id: 'global',
                                    memory_usage: '836'
                                })
                            client.send(setserver);

                            if(stz.getChild('query', "urn:cryonline:k01").children[0].attrs.status === '1'){
                                gameroom_sync.module(client, stz, query);
                                session_join_xml = ltx.parse(
                                    "<iq from='"+stz.attrs.to+"' type='get'>"+
                                    "<query xmlns='urn:cryonline:k01'>"+
                                         "<session_join room_id='2' server='gameamazing' hostname='192.168.25.2' port='64013' local='0'/>"+
                                    "</query>"+
                                    "</iq>"
                                )
                                client.send(session_join_xml)
                            }
// 
                            
                            /*gameroom_sync.module(client, stz, query);*/
                            /**/
                            //session_join_xml = ltx.parse(
                            //    "<iq from='"+stz.attrs.to+"' to='"+stz.attrs.from+"' id='"+stz.attrs.id+"' type='get'>"+
                            //    "<query xmlns='urn:cryonline:k01'>"+
                            //        "<gameroom_join room_id='2' team_id='0' status='1' class_id='1' join_reason='0' wait_time_to_join='0'/>"+
                            //    "</query>"+
                            //    "</iq>"
                            //)
                            //client.send(session_join_xml)


                            /*session_join_xml = ltx.parse(
                                "<iq from='"+stz.attrs.to+"' type='get'>"+
                                "<query xmlns='urn:cryonline:k01'>"+
                                     "<session_join room_id='2' server='gameamazing' hostname='10.1.1.8' port='64013' local='0' session_id='1'/>"+
                                "</query>"+
                                "</iq>"
                            )
                            client.send(session_join_xml)*/
                            //gameroom_sync.module(client, stz, query);



                            break;

                        // --- //


                        case 'items':
                            items.module(client, stz, query.attrs.to)
                            break;
                        default:
                            //var from = stz.attrs.from
                            //stz.attrs.from = stz.attrs.to
                            //stz.attrs.to = from
                            //client.send(stz)
                            //console.log(colors.red('Query não configurada ------------------ '));
                            //console.log(stz.toString(), '\n');
                    }

                }

                

            } // iq //

            //console.log(stz.toString(), '\n');

        })
    })
}