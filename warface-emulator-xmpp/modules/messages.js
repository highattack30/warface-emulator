var xmpp = require('node-xmpp');
var ltx = require('ltx');
var User = require('../lib/users.js');

function Messages() {
}

exports.configure = function(server, config) {
    server.on('connect', function(client) {
        client.on('stanza', function(stz) {
            User.findOne({username: client.jid.user}, function(err, user_db) {
                if (stz.is('message')) {
                    var query = stz.getChild('body').children[0];
                    message = ltx.parse("<message from='"+stz.attrs.to+"/"+user_db.nickname+"' to='"+stz.attrs.from+"' type='groupchat'>"+
    		       		"<body>"+query+"</body>"+
    		       	"</message>");
    		       	client.send(message);
                }
            });
        });
    });
}

