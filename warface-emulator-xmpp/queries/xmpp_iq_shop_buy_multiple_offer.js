var ltx = require('ltx');
var Profile = require('../lib/db/profiles.js');


// function randomGet(){
    
//     // var myarray = [
//     //     {name: 'ar22_gold01_shop'},
//     //     {name: 'ar22_shop'},
//     //     {name: 'exp_item_01'},
//     //     {name: 'exp_item_01', amount: '350'},
//     //     {name: 'exp_item_01', amount: '250'},
//     //     {name: 'exp_item_01', amount: '125'},
//     //     {name: 'exp_item_01', amount: '50'},
//     //     {name: 'smokegrenade04_c', amount: '1'},
//     //     {name: 'smokegrenade04_c', amount: '3'},
//     //     {name: 'flashbang', expiration: '1d'},
//     //     {name: 'flashbang', expiration: '3d'},
//     //     {name: 'explosivegrenade02_c', amount: '3'},
//     //     {name: 'claymoreexplosive04_c', amount: '3'},
//     //     {name: 'coin_01', amount: '1'}
//     // ];

//     // var random = myarray[Math.floor(Math.random() * myarray.length)];
//     // return random;

// }

// function ramdomNumbers(myarray){

// }

// function itemsWarboxList (query){
   
//     var itemsWarbox = query.children.length;

//     // var myarray = [
//     //     {name: 'ar22_gold01_shop'},
//     //     {name: 'ar22_shop'},
//     //     {name: 'exp_item_01'},
//     //     {name: 'exp_item_01', amount: '350'},
//     //     {name: 'exp_item_01', amount: '250'},
//     //     {name: 'exp_item_01', amount: '125'},
//     //     {name: 'exp_item_01', amount: '50'},
//     //     {name: 'smokegrenade04_c', amount: '1'},
//     //     {name: 'smokegrenade04_c', amount: '3'},
//     //     {name: 'flashbang', expiration: '1d'},
//     //     {name: 'flashbang', expiration: '3d'},
//     //     {name: 'explosivegrenade02_c', amount: '3'},
//     //     {name: 'claymoreexplosive04_c', amount: '3'},
//     //     {name: 'coin_01', amount: '1'}
//     // ];


//     var myarray = [
//         {type: 'exp', name: 'exp_item_01', added: '350', total: '976848'},
//         {type: 'exp', name: 'exp_item_01', added: '250', total: '976848'},
//         {type: 'exp', name: 'exp_item_01', added: '125', total: '976848'},
//         {type: 'exp', name: 'exp_item_01', added: '50', total: '976848'},
//         {type: 'shop', name: 'exp_item_01', added: '50', total: '976848'},
//         {type: 'coin', name: 'exp_item_01', added: '50', total: '976848'},
//         {type: 'grenade', name: 'flashbang', expiration: '3d'},
//         {type: 'grenade', name: 'explosivegrenade02_c', amount: '3', expiration: '0'},
//         {type: 'clay', name: 'claymoreexplosive04_c', amount: '3', expiration: '0'}
//     ];
    
    
//     for(var i = 0; i < itemsWarbox; i++) {
//         if(myarray[Math.floor((Math.random() * myarray.length))].type === 'exp'){
//             console.log(myarray[Math.floor((Math.random() * myarray.length))])
//         }
//     }

//     // if(randomGet().name === "exp_item_01"){         
//         //     arrayItems += "<exp name='"+randomGet().name+"' added='"+randomGet().amount+"' total='9"+(""+Math.random()).substring(2,7)+"' offerId='"+query.children[i].attrs.id+"'/>";
//         // }

//         // arrayItems += "<profile_item name='"+randomGet().name+"' profile_item_id='96"+(""+Math.random()).substring(2,7)+"' offerId='"+query.children[i].attrs.id+"' added_expiration='"+randomGet().expiration+"' added_quantity='"+randomGet().amount+"' error_status='0'>"+
//         //         "<item id='96"+(""+Math.random()).substring(2,7)+"' name='"+randomGet().name+"' attached_to='0' config='dm=0;material=;pocket_index=2098176' slot='230"+(""+Math.random()).substring(2,7)+"' equipped='20' default='0' permanent='0' expired_confirmed='0' buy_time_utc='1460666738' quantity=''/>"+
//         //     "</profile_item>";

//     // return arrayItems;

//    // console.log(arrayItems);

// }

function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

function itemsWarboxList(query){

    var itemsWarbox = query.children.length;
 
    var results = [
        {name: 'ar22_gold01_shop'},
        {name: 'ar22_shop'},
        {name: 'exp_item_01', amount: '350'},
        {name: 'exp_item_01', amount: '250'},
        {name: 'exp_item_01', amount: '125'},
        {name: 'exp_item_01', amount: '50'},
        {name: 'smokegrenade04_c', amount: '1'},
        {name: 'smokegrenade04_c', amount: '3'},
        {name: 'flashbang', expiration: '1d'},
        {name: 'flashbang', expiration: '3d'},
        {name: 'explosivegrenade02_c', amount: '3'},
        {name: 'claymoreexplosive04_c', amount: '3'},
        {name: 'coin_01', amount: '1'}
    ];

    var arrayItems = "";

    for (var i = 0; i < itemsWarbox; i++) {

        var n = shuffle(results)[i];

       if(n.name == 'exp_item_01'){
           
            arrayItems += "<exp name='"+n.name+"' added='"+n.amount+"' total='"+(""+Math.random()).substring(2,7)+"' offerId='"+query.children[i].attrs.id+"'/>";
       
       }else if(n.name == 'smokegrenade04_c'){
            
            arrayItems += "<profile_item name='"+n.name+"' profile_item_id='9"+(""+Math.random()).substring(2,7)+"' offerId='"+query.children[i].attrs.id+"' added_expiration='"+n.expiration+"' added_quantity='"+n.amount+"' error_status='0'>"+
                "<item id='9"+(""+Math.random()).substring(2,7)+"' name='"+n.name+"' attached_to='0' config='dm=0;material=;pocket_index=2098176' slot='230"+(""+Math.random()).substring(2,7)+"' equipped='20' default='0' permanent='0' expired_confirmed='0' buy_time_utc='1460666738' quantity=''/>"+
            "</profile_item>";

       }else if(n.name == 'flashbang'){
            
            // ok
            arrayItems += "<profile_item name='"+n.name+"' profile_item_id='9"+(""+Math.random()).substring(2,7)+"' offerId='"+query.children[i].attrs.id+"' added_expiration='"+n.expiration+"' added_quantity='' error_status='0'>"+
                "<item id='9"+(""+Math.random()).substring(2,7)+"' name='"+n.name+"' attached_to='0' config='dm=0;material=;pocket_index=3246082' slot='5411845' equipped='29' default='0' permanent='0' expired_confirmed='0' buy_time_utc='1460671183' expiration_time_utc='1490317236' seconds_left='24534598'/>"+
            "</profile_item>";

       }else if(n.name == 'explosivegrenade02_c'){

            var getquantity = n.amount+'1';
            
            arrayItems += "<profile_item name='"+n.name+"' profile_item_id='9"+(""+Math.random()).substring(2,7)+"' offerId='"+query.children[i].attrs.id+"' added_expiration='0' added_quantity='"+n.amount+"' error_status='0'>"+
                "<item id='9"+(""+Math.random()).substring(2,7)+"' name='"+n.name+"' attached_to='0' config='dm=0;material=;pocket_index=1' slot='21212121215465' equipped='20' default='0' permanent='0' expired_confirmed='0' buy_time_utc='1460666738' quantity='"+getquantity+"'/>"+
            "</profile_item>";

       }else if(n.name == 'claymoreexplosive04_c'){
            
            var getquantity = n.amount+'1';

            arrayItems += "<profile_item name='"+n.name+"' profile_item_id='9"+(""+Math.random()).substring(2,7)+"' offerId='"+query.children[i].attrs.id+"' added_expiration='0' added_quantity='"+n.amount+"' error_status='0'>"+
                "<item id='9"+(""+Math.random()).substring(2,7)+"' name='"+n.name+"' attached_to='0' config='dm=0;material=;pocket_index=2098176' slot='230"+(""+Math.random()).substring(2,7)+"' equipped='20' default='0' permanent='1' expired_confirmed='0' buy_time_utc='1460666738' quantity='"+getquantity+"'/>"+
            "</profile_item>";

       }else if(n.name == 'coin_01'){
            
            var getquantity = n.amount+'1';

            arrayItems += "<profile_item name='"+n.name+"' profile_item_id='9"+(""+Math.random()).substring(2,7)+"' offerId='"+query.children[i].attrs.id+"' added_expiration='' added_quantity='"+n.amount+"' error_status='0'>"+
                "<item id='9"+(""+Math.random()).substring(2,7)+"' name='"+n.name+"' attached_to='0' config='dm=0;material=;pocket_index=2098176' slot='230"+(""+Math.random()).substring(2,7)+"' equipped='20' default='0' permanent='0' expired_confirmed='0' buy_time_utc='1460666738' quantity='"+getquantity+"'/>"+
            "</profile_item>";

       }else{
            arrayItems += "<profile_item name='"+n.name+"' profile_item_id='9"+(""+Math.random()).substring(2,7)+"' offerId='"+query.children[i].attrs.id+"' error_status='0'>"+
                "<item id='9"+(""+Math.random()).substring(2,7)+"' name='"+n.name+"' attached_to='0' config='dm=0;material=;pocket_index=2098176' slot='230"+(""+Math.random()).substring(2,7)+"' equipped='1' default='0' permanent='1' expired_confirmed='0' buy_time_utc='0' expiration_time_utc='0' seconds_left='0'/>"+
            "</profile_item>";
       }

    }

    return arrayItems;

}

exports.module = function(client, stz, query) {

    clan_performance = ltx.parse(
        "<iq from='"+stz.attrs.to+"' type='get'>"+
    		"<query xmlns='urn:cryonline:k01'>"+
    			"<shop_buy_multiple_offer error_status='0'>"+
                    "<purchased_item>"+
                        itemsWarboxList(query)+
                    "</purchased_item>"+
                    "<money game_money='1000005' cry_money='100000' crown_money='100000'/>"+
                "</shop_buy_multiple_offer>"+
    	   "</query>"+
    	"</iq>"
    )
    client.send(clan_performance);

}