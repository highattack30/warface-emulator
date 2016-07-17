var ltx = require('ltx');
var User = require('../lib/users.js');

exports.module = function(client, stz) {
    User.findOne({username: client.jid.user}, function(err, user_db) {
    
        get_account_profiles = ltx.parse(
            "<iq from='"+stz.attrs.to+"' type='get'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<get_account_profiles>"+
                        "<profile id='"+user_db.profileid+"' nickname='"+user_db.nickname+"'/>"+
                    "</get_account_profiles>"+
                "</query>"+
            "</iq>"
        )
        client.send(get_account_profiles); 

        //var profile = new ltx.Element('iq', {from: stz.attrs.to, to: stz.attrs.from, id: stz.attrs.id, type: 'get'})
        //.c('query', {xmlns: 'urn:cryonline:k01'}) 
        //profile.c('get_account_profiles')
        //client.send(profile)

    });
}