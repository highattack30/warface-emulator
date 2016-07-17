var ltx = require('ltx');
var User = require('../lib/users.js');
var Profile = require('../lib/db/profiles.js');
var Friends = require('../lib/db/friends.js');

// function getUserId(id, callback){
    


//     // Profile.findOne({profileid: id}, function(err, user_db) {
//     //     callback(user_db);
//     // });
// }

// function getFriends (id){


//     console.log(Friends.find({my_profile_id: id}));


//     // Friends.find({my_profile_id: id}, function(err, fri) {
//     //     var friendsList = '';
//     //     for (var i = 0; i < fri.length; i++) {
//     //         getUserId(fri[i].to_profile_id, function(e){
//     //             friendsList += "<friend jid='' profile_id='"+e.profileid+"' nickname='"+e.nickname+"' status='0' experience='"+e.experience+"' location=''/>";
//     //         });
//     //     }
//     //     return friendsList;
//     // });
// }

exports.module = function(client, stz) {
    User.findOne({username: 'rubens'}, function(err, user_db) {
    //    friendlist = ltx.parse("<iq from='"+stz.attrs.to+"' to='"+stz.attrs.from+"' xml:lang='en' type='get'>"+
    //        "<query xmlns='urn:cryonline:k01'>"+
    //            "<friend_list>"+
    //                getFriends(user_db.profileid)
    //            "</friend_list>"+
    //        "</query>"+
    //    "</iq>");
    //    client.send(friendlist);

    //    console.log(friendlist.toString());



    getFriends(user_db.profileid)


    });
}