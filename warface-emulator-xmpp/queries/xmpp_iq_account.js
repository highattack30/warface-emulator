var ltx = require('ltx');
var User = require('../lib/users.js');
var random = Math.floor((Math.random() * 100000000000000) + 1);

function stringGen(len){ 
    var text = "";
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
}

// load_balancing_type='server' survival_lb_enabled='1'

exports.module = function(client, stz) {
    User.findOne({username: client.jid.user}, function(err, user_db) {
        account = ltx.parse(
            "<iq from='k01.warface' to='"+stz.attrs.from+"' type='get'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<account user='"+user_db.userid+"' active_token='' survival_lb_enabled='1'>"+
                        "<masterservers>"+
                            "<server resource='main_pve_6' server_id='6' channel='pve' rank_group='all' load='0.000000' online='0' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='245'/>"+
                                    "<load_stat type='pve' value='244'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pve_7' server_id='7' channel='pve' rank_group='all' load='0.233726' online='149' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='243'/>"+
                                    "<load_stat type='pve' value='248'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_skilled_2' server_id='202' channel='pvp_skilled' rank_group='all' load='0.589804' online='376' min_rank='16' max_rank='40' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_skilled_6' server_id='206' channel='pvp_skilled' rank_group='all' load='0.047059' online='30' min_rank='16' max_rank='40' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='249'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_newbie_2' server_id='102' channel='pvp_newbie' rank_group='all' load='0.053333' online='34' min_rank='1' max_rank='15' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='245'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_pro_2' server_id='302' channel='pvp_pro' rank_group='all' load='0.240000' online='153' min_rank='41' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_pro_5' server_id='305' channel='pvp_pro' rank_group='all' load='0.072157' online='46' min_rank='41' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='241'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pve_9' server_id='9' channel='pve' rank_group='all' load='0.009412' online='3' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+
                            
                            "<server resource='main_pvp_pro_1' server_id='301' channel='pvp_pro' rank_group='all' load='0.080000' online='51' min_rank='41' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='240'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pve_8' server_id='8' channel='pve' rank_group='all' load='0.160000' online='102' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='240'/>"+
                                    "<load_stat type='pve' value='243'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_newbie_3' server_id='103' channel='pvp_newbie' rank_group='all' load='0.106667' online='68' min_rank='1' max_rank='15' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='237'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_newbie_4' server_id='104' channel='pvp_newbie' rank_group='all' load='0.064314' online='41' min_rank='1' max_rank='15' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='241'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_skilled_1' server_id='201' channel='pvp_skilled' rank_group='all' load='0.109804' online='70' min_rank='16' max_rank='40' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='232'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_pro_6' server_id='306' channel='pvp_pro' rank_group='all' load='0.832941' online='530' min_rank='41' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_skilled_5' server_id='205' channel='pvp_skilled' rank_group='all' load='0.053333' online='34' min_rank='16' max_rank='40' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='243'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_skilled_3' server_id='203' channel='pvp_skilled' rank_group='all' load='0.125490' online='80' min_rank='16' max_rank='40' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='232'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pve_5' server_id='5' channel='pve' rank_group='all' load='0.120784' online='77' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='243'/>"+
                                    "<load_stat type='pve' value='248'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pve_1' server_id='1' channel='pve' rank_group='all' load='0.133333' online='85' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='246'/>"+
                                    "<load_stat type='pve' value='245'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pve_2' server_id='2' channel='pve' rank_group='all' load='0.119216' online='76' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='247'/>"+
                                    "<load_stat type='pve' value='246'/>"+
                                "</load_stats>"+
                            "</server>"+
                            
                            "<server resource='main_pvp_pro_7' server_id='307' channel='pvp_pro' rank_group='all' load='0.083137' online='53' min_rank='41' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='247'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_newbie_1' server_id='101' channel='pvp_newbie' rank_group='all' load='0.114510' online='73' min_rank='1' max_rank='15' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='228'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_pro_8' server_id='308' channel='pvp_pro' rank_group='all' load='0.070588' online='45' min_rank='41' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='240'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pve_3' server_id='3' channel='pve' rank_group='all' load='0.120784' online='77' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='243'/>"+
                                    "<load_stat type='pve' value='246'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_pro_3' server_id='303' channel='pvp_pro' rank_group='all' load='0.075294' online='48' min_rank='41' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='243'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pve_10' server_id='10' channel='pve' rank_group='all' load='0.156863' online='100' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='249'/>"+
                                    "<load_stat type='pve' value='239'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_pro_4' server_id='304' channel='pvp_pro' rank_group='all' load='0.058039' online='37' min_rank='41' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='244'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pve_4' server_id='4' channel='pve' rank_group='all' load='0.130196' online='83' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='249'/>"+
                                    "<load_stat type='pve' value='240'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_skilled_4' server_id='204' channel='pvp_skilled' rank_group='all' load='0.029804' online='19' min_rank='16' max_rank='40' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='249'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+
                        "</masterservers>"+
                    "</account>"+
                "</query>"+
            "</iq>"
        )
        client.send(account);
    });
}