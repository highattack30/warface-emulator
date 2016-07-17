var ltx = require('ltx');
var Profile = require('../lib/db/profiles.js');

function itemsList(items){
    var item = "";
    for (var i = 0; i < items.length; i++) {
       item += "<item id='"+items[i].id+"' name='"+items[i].name+"' attached_to='"+items[i].attached_to+"' config='"+items[i].config+"' slot='"+items[i].slot+"' equipped='"+items[i].equipped+"' default='"+items[i].default+"' permanent='"+items[i].permanent+"' expired_confirmed='"+items[i].expired_confirmed+"' buy_time_utc='"+items[i].buy_time_utc+"' expiration_time_utc='"+items[i].expiration_time_utc+"' seconds_left='"+items[i].seconds_left+"'/>";
    }
    return item;
}

exports.module = function(client, stz, query) {
    Profile.findOne({username: client.jid.user}, function(err, profile_db) {

            join_channel = ltx.parse(
                "<iq from='"+stz.attrs.to+"' to='"+stz.attrs.from+"' type='get'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<join_channel>"+
                        "<character nick='"+profile_db.nickname+"' gender='"+profile_db.gender+"' height='"+profile_db.height+"' fatness='0' head='"+profile_db.head+"' current_class='"+profile_db.current_class+"' experience='100' pvp_rating_points='"+profile_db.pvp_rating_points+"' banner_badge='"+profile_db.banner_badge+"' banner_mark='"+profile_db.banner_mark+"' banner_stripe='"+profile_db.banner_stripe+"' game_money='"+profile_db.game_money+"' cry_money='"+profile_db.cry_money+"' crown_money='"+profile_db.crown_money+"'>"+
                            // Default
                            "<item id='4' name='medic_helmet_01' attached_to='0' config='dm=0;material=default' slot='4' equipped='8' default='1' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='6' name='sniper_helmet_01' attached_to='0' config='dm=0;material=default' slot='6' equipped='4' default='1' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+                    
                            "<item id='8' name='soldier_helmet_05' attached_to='0' config='dm=0;material=default' slot='8' equipped='1' default='1' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='10' name='engineer_helmet_01' attached_to='0' config='dm=0;material=default' slot='10' equipped='16' default='1' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='11' name='shared_hands_01' attached_to='0' config='dm=0;material=default' slot='11' equipped='29' default='1' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='12' name='shared_pants_01' attached_to='0' config='dm=0;material=default' slot='12' equipped='29' default='1' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='13' name='shared_jacket_01' attached_to='0' config='dm=0;material=default' slot='13' equipped='29' default='1' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='14' name='shared_shoes_01' attached_to='0' config='dm=0;material=default' slot='14' equipped='29' default='1' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='15' name='shared_vest_01' attached_to='0' config='dm=0;material=default' slot='15' equipped='29' default='1' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            
                            "<item id='39031471' name='shared_hands_05' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='0' equipped='0' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='39031472' name='shared_hands_02' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='0' equipped='0' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='39031473' name='shared_hands_03' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='0' equipped='0' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='39031474' name='shared_hands_04' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='0' equipped='0' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='39031475' name='shared_hands_06' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='0' equipped='0' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='39031476' name='shared_hands_07' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='0' equipped='0' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='39031477' name='shared_hands_08' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='0' equipped='0' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+

                            // Skins
                            '<item id="39168566" name="f_sniper_fbs_03" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="30" equipped="29" default="0" permanent="1" expired_confirmed="0" buy_time_utc="0" expiration_time_utc="0" seconds_left="0" />'+
                            '<item id="40791737" name="f_engineer_fbs_03" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="31" equipped="29" default="0" permanent="1" expired_confirmed="0" buy_time_utc="0" expiration_time_utc="0" seconds_left="0" />'+
                            '<item id="40791789" name="f_soldier_fbs_03" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="32" equipped="29" default="0" permanent="1" expired_confirmed="0" buy_time_utc="0" expiration_time_utc="0" seconds_left="0" />'+
                            '<item id="40791748" name="f_medic_fbs_03" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="33" equipped="29" default="0" permanent="1" expired_confirmed="0" buy_time_utc="0" expiration_time_utc="0" seconds_left="0" />'+

                            // Ak 103
                            '<item id="41311040" name="ar04_default" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="1" equipped="1" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458488350" total_durability_points="36000" durability_points="36003" />'+
                            '<item id="4131104002399001" name="ar04_afro01_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="1" equipped="1" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458488350" total_durability_points="36000" durability_points="36003" />'+
                            '<item id="4131104002199001" name="ar04_camo04_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="1" equipped="1" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458488350" total_durability_points="36000" durability_points="36003" />'+
                            '<item id="4131104002599001" name="ar04_camo05_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="1" equipped="1" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458488350" total_durability_points="36000" durability_points="36003" />'+
                            '<item id="4131104002799001" name="ar04_rstest_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="1" equipped="1" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458488350" total_durability_points="36000" durability_points="36003" />'+
                            '<item id="4131104002899001" name="ar04_rua02_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="1" equipped="1" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458488350" total_durability_points="36000" durability_points="36003" />'+
                            '<item id="413110400299001" name="ar04_set01_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="1" equipped="1" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458488350" total_durability_points="36000" durability_points="36003" />'+
                            '<item id="4131178999001" name="ar04_bra03_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="1" equipped="1" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458488350" total_durability_points="36000" durability_points="36003" />'+

                            // Katana
                            '<item id="41918361" name="kn13" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="4325380" equipped="25" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458966034" total_durability_points="36000" durability_points="36005" />'+

                            // SIG sauer
                            '<item id="40980762" name="pt14_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="3247107" equipped="29" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458146646" total_durability_points="36000" durability_points="36001" />'+
                            
                            '<item id="41255454415" name="pt29_fld01_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="3247107" equipped="0" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458146646" total_durability_points="36000" durability_points="36001" />'+
                            '<item id="412554544558" name="ar20_crown02_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="3247107" equipped="0" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458146646" total_durability_points="36000" durability_points="36001" />'+
                            '<item id="412554544559" name="ar16_crown02_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="3247107" equipped="0" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458146646" total_durability_points="36000" durability_points="36001" />'+
                            '<item id="412554544548" name="gl01_zsd01_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="3247107" equipped="0" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458146646" total_durability_points="36000" durability_points="36001" />'+

                            // Armas test
                            "<item id='17' name='ar11_gold01_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='1' equipped='1' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18' name='kn16_gold01' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='4325380' equipped='25' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='19' name='ar12_gold01_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='17' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            
                            "<item id='20' name='mg07_gold01_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='19' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='21' name='ar22_gold01_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='20' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='22' name='pt01_gold01_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='21' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+

                            "<item id='23' name='shg07_gold01_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='22' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='24' name='shg35_gold01_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='23' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='25' name='shg37_gold01_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='24' equipped='1' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            
                            "<item id='26' name='smg10_gold01_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='25' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='27' name='smg31_gold01_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='26' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+

                            // Snipes gold
                            "<item id='28' name='sr04_gold01_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='27' equipped='1' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='29' name='sr14_gold01_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='28' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            
                            "<item id='30' name='sr31_gold01_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='29' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='33' name='sr31_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='33' equipped='25' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='34' name='sr31_oc01_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='34' equipped='1' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+

                            "<item id='35' name='sr33_gold01_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='30' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='36' name='sr34_gold01_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='31' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            
                            //

                            "<item id='36' name='ar11_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='1' equipped='1' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='37' name='kn16' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='4325380' equipped='25' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='38' name='ar12_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='17' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            
                            "<item id='39' name='mg07_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='19' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='40' name='ar22_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='20' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='41' name='pt01_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='21' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+

                            "<item id='42' name='shg07_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='22' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='43' name='shg35_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='23' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='44' name='shg37_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='24' equipped='1' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            
                            "<item id='45' name='smg10_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='25' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='46' name='smg31_shop' attached_to='0' config='dm=0;material=default;pocket_index=0' slot='26' equipped='29' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+


                            // Nova arma
                            '<item id="250" name="smg33_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="12154545" equipped="29" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458488350" total_durability_points="36000" durability_points="36003" />'+    
                            '<item id="254" name="smg33_gold01_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="1121545" equipped="29" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458146646" total_durability_points="36000" durability_points="36001" />'+    

                            '<item id="3456456" name="pt31_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="1121545" equipped="29" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458146646" total_durability_points="36000" durability_points="36001" />'+    
                            '<item id="34514256" name="sr35_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="1121545" equipped="29" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458146646" total_durability_points="36000" durability_points="36001" />'+    
                            
                            // Nova faca
                            '<item id="345154456" name="kn17" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="1121545" equipped="29" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458146646" total_durability_points="36000" durability_points="36001" />'+    
                            
                            // Skin machado tatico
                            '<item id="345145456" name="kn16_oc01_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="1121545" equipped="29" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458146646" total_durability_points="36000" durability_points="36001" />'+    

                            '<item id="312124154756956" name="smg05_bundle_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="1121545" equipped="29" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458146646" total_durability_points="36000" durability_points="36001" />'+    
                            '<item id="312120000787756" name="smg03_crown02_shop" attached_to="0" config="dm=0;material=default;pocket_index=0" slot="1121545" equipped="29" default="0" permanent="1" expired_confirmed="0" buy_time_utc="1458146646" total_durability_points="36000" durability_points="36001" />'+    

                            
                            // Modificações das armas
                            "<item id='18446744073709551021' name='ps01' attached_to='0' config='' slot='21647380' equipped='29' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709551017' name='ss04' attached_to='0' config='' slot='20480' equipped='4' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709551012' name='sp02' attached_to='0' config='' slot='20971520' equipped='16' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709551011' name='as01' attached_to='0' config='' slot='20' equipped='1' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709551007' name='as06' attached_to='0' config='' slot='20971520' equipped='16' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709551002' name='as02' attached_to='0' config='' slot='20' equipped='1' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550999' name='bn02' attached_to='0' config='' slot='20' equipped='1' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550997' name='rds02' attached_to='0' config='' slot='21647380' equipped='29' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550993' name='as03' attached_to='0' config='' slot='20971520' equipped='16' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550991' name='rds01' attached_to='0' config='' slot='21647380' equipped='29' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550989' name='sp06' attached_to='0' config='' slot='655360' equipped='8' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550987' name='ss01' attached_to='0' config='' slot='20480' equipped='4' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550983' name='bp03' attached_to='0' config='' slot='20480' equipped='4' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550981' name='ss02' attached_to='0' config='' slot='20480' equipped='4' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550976' name='gp01' attached_to='0' config='' slot='20971520' equipped='16' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550975' name='rds04' attached_to='0' config='' slot='655360' equipped='8' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550971' name='sp04' attached_to='0' config='' slot='20480' equipped='4' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550967' name='sp05' attached_to='0' config='' slot='21647380' equipped='29' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550961' name='bn03' attached_to='0' config='' slot='20971520' equipped='16' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550958' name='sc04' attached_to='0' config='' slot='655360' equipped='8' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550955' name='bp01' attached_to='0' config='' slot='20480' equipped='4' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550947' name='sp03' attached_to='0' config='' slot='20' equipped='1' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550943' name='bp02' attached_to='0' config='' slot='20' equipped='1' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550939' name='gpp02' attached_to='0' config='' slot='20971520' equipped='16' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550933' name='bn01' attached_to='0' config='' slot='655360' equipped='8' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550932' name='bn05' attached_to='0' config='' slot='21647380' equipped='29' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550931' name='rds03' attached_to='0' config='' slot='655360' equipped='8' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550926' name='sc01' attached_to='0' config='' slot='20971520' equipped='16' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550925' name='as05' attached_to='0' config='' slot='20971520' equipped='16' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550922' name='as04' attached_to='0' config='' slot='20' equipped='1' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550921' name='sc06' attached_to='0' config='' slot='20480' equipped='4' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550907' name='gp03' attached_to='0' config='' slot='21647380' equipped='29' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550904' name='gp02' attached_to='0' config='' slot='20' equipped='1' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550902' name='ugl01' attached_to='0' config='' slot='20' equipped='1' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550900' name='sc03' attached_to='0' config='' slot='21647380' equipped='29' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550899' name='gpp01' attached_to='0' config='' slot='20' equipped='1' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550893' name='sc02' attached_to='0' config='' slot='21647380' equipped='29' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            "<item id='18446744073709550891' name='sc05' attached_to='0' config='' slot='20' equipped='1' default='0' permanent='0' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
                            
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
                               '<item key="cvar:cl_payment_enabled" value="0" />'+
                            '</variables>'+
                        "</character>"+
                    "</join_channel>"+
                "</query>"+
                "</iq>"
            )

            client.send(join_channel)

    });
}
    			