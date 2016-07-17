var ltx = require('ltx');

//shop_get_offers

exports.module = function(client, stz) {
    shop_get_offers = ltx.parse(
        "<iq from='"+stz.attrs.to+"' to='"+stz.attrs.from+"' type='get'>"+
            "<query xmlns='urn:cryonline:k01'>"+
                "<shop_get_offers code='3' from='500' to='250' hash=''>"+
                    
                    '<offer id="1" expirationTime="0" durabilityPoints="0" repair_cost="pt01_gold01_shop,0,0;pt01_default,4000,36000;" quantity="0" name="random_box_05" item_category_override="" offer_status="normal" supplier_id="1" discount="0" rank="5" game_price="450" cry_price="0" crown_price="0" game_price_origin="450" cry_price_origin="0" crown_price_origin="0" key_item_name="" key_item_price="0"/>'+
                    '<offer id="2" expirationTime="0" durabilityPoints="0" repair_cost="pt01_gold01_shop,0,0;pt01_default,4000,36000;" quantity="0" name="random_box_05" item_category_override="" offer_status="normal" supplier_id="1" discount="0" rank="5" game_price="425" cry_price="0" crown_price="0" game_price_origin="425" cry_price_origin="0" crown_price_origin="0" key_item_name="" key_item_price="0"/>'+
                    '<offer id="3" expirationTime="0" durabilityPoints="0" repair_cost="pt01_gold01_shop,0,0;pt01_default,4000,36000;" quantity="0" name="random_box_05" item_category_override="" offer_status="normal" supplier_id="1" discount="0" rank="5" game_price="400" cry_price="0" crown_price="0" game_price_origin="400" cry_price_origin="0" crown_price_origin="0" key_item_name="" key_item_price="0"/>'+
                    '<offer id="4" expirationTime="0" durabilityPoints="0" repair_cost="pt01_gold01_shop,0,0;pt01_default,4000,36000;" quantity="0" name="random_box_05" item_category_override="" offer_status="normal" supplier_id="1" discount="0" rank="5" game_price="375" cry_price="0" crown_price="0" game_price_origin="375" cry_price_origin="0" crown_price_origin="0" key_item_name="" key_item_price="0"/>'+
                    '<offer id="5" expirationTime="0" durabilityPoints="0" repair_cost="pt01_gold01_shop,0,0;pt01_default,4000,36000;" quantity="0" name="random_box_05" item_category_override="" offer_status="normal" supplier_id="1" discount="0" rank="5" game_price="350" cry_price="0" crown_price="0" game_price_origin="350" cry_price_origin="0" crown_price_origin="0" key_item_name="" key_item_price="0"/>'+
                    
                    '<offer id="6" expirationTime="0" durabilityPoints="0" repair_cost="ar22_shop,5400,36000;ar22_gold01_shop,0,0;" quantity="0" name="random_box_10" item_category_override="" offer_status="normal" supplier_id="1" discount="0" rank="5" game_price="600" cry_price="0" crown_price="0" game_price_origin="600" cry_price_origin="0" crown_price_origin="0" key_item_name="" key_item_price="0"/>'+
                    '<offer id="7" expirationTime="0" durabilityPoints="0" repair_cost="ar22_shop,5400,36000;ar22_gold01_shop,0,0;" quantity="0" name="random_box_10" item_category_override="" offer_status="normal" supplier_id="1" discount="0" rank="5" game_price="580" cry_price="0" crown_price="0" game_price_origin="580" cry_price_origin="0" crown_price_origin="0" key_item_name="" key_item_price="0"/>'+
                    '<offer id="8" expirationTime="0" durabilityPoints="0" repair_cost="ar22_shop,5400,36000;ar22_gold01_shop,0,0;" quantity="0" name="random_box_10" item_category_override="" offer_status="normal" supplier_id="1" discount="0" rank="5" game_price="560" cry_price="0" crown_price="0" game_price_origin="560" cry_price_origin="0" crown_price_origin="0" key_item_name="" key_item_price="0"/>'+
                    '<offer id="9" expirationTime="0" durabilityPoints="0" repair_cost="ar22_shop,5400,36000;ar22_gold01_shop,0,0;" quantity="0" name="random_box_10" item_category_override="" offer_status="normal" supplier_id="1" discount="0" rank="5" game_price="540" cry_price="0" crown_price="0" game_price_origin="540" cry_price_origin="0" crown_price_origin="0" key_item_name="" key_item_price="0"/>'+
                    '<offer id="10" expirationTime="0" durabilityPoints="0" repair_cost="ar22_shop,5400,36000;ar22_gold01_shop,0,0;" quantity="0" name="random_box_10" item_category_override="" offer_status="normal" supplier_id="1" discount="0" rank="5" game_price="520" cry_price="0" crown_price="0" game_price_origin="520" cry_price_origin="0" crown_price_origin="0" key_item_name="" key_item_price="0"/>'+
                    
                    '<offer id="11" expirationTime="0" durabilityPoints="36000" repair_cost="2621" quantity="0" name="pt07_shop" item_category_override="" offer_status="normal" supplier_id="1" discount="0" rank="2" game_price="3280" cry_price="0" crown_price="0" game_price_origin="3280" cry_price_origin="0" crown_price_origin="0" key_item_name="" key_item_price="0"/>'+
                    '<offer id="12" expirationTime="1 day" durabilityPoints="0" repair_cost="0" quantity="0" name="shg11_shop" item_category_override="" offer_status="normal" supplier_id="1" discount="0" rank="2" game_price="1230" cry_price="0" crown_price="0" game_price_origin="1230" cry_price_origin="0" crown_price_origin="0" key_item_name="" key_item_price="0"/>'+
                
                '</shop_get_offers>'+
            "</query>"+
        "</iq>"
    )
    client.send(shop_get_offers);
}