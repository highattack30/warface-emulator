var ltx = require('ltx');
var Profile = require('../lib/db/profiles.js');

exports.module = function(client, stz, query) {

    shop_buy_offer = ltx.parse(
        "<iq from='"+stz.attrs.to+"' type='get'>"+
            "<query xmlns='urn:cryonline:k01'>"+
                "<shop_buy_offer offer_id='8000' error_status='0'>"+
                    "<purchased_item>"+
                        "<profile_item name='shg11_shop' profile_item_id='121783327' offerId='12' added_expiration='0' added_quantity='0' error_status='0'>"+
                            "<item id='121783327' name='shg11_shop' attached_to='0' config='' slot='0' equipped='0' default='0' permanent='1' expired_confirmed='0' buy_time_utc='1466427941' total_durability_points='36000' durability_points='36000'/>"+
                        "</profile_item>"+
                    "</purchased_item>"+
                    "<money game_money='1000000' cry_money='245000' crown_money='100000'/>"+
                "</shop_buy_offer>"+
           "</query>"+
        "</iq>"
    )
    client.send(shop_buy_offer);
    
}