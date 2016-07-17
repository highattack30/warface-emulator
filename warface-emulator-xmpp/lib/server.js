var xmpp        = require('node-xmpp-server');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var net         = require('net');

// Loading all modules needed
var Logger      = require('../modules/logger');
var Router      = require('../modules/router');
var Offline     = require('../modules/offline');
var Version     = require('../modules/version'); 
var Presence    = require('../modules/presence');
var Message     = require('../modules/messages');
var Roster      = require('../modules/roster');
var DiscoInfo   = require('../modules/disco_info');
var LoadQueries = require('../modules/load_queries');
var VCard       = require('../modules/vcard');
var Websocket   = require('../modules/websocket');
var S2S         = require('../modules/s2s');
var Ping        = require('../modules/ping');

// Loading non -xmpp libraries
var User = require('../lib/users.js');

// Proxy host
// This server listens on TCP/IP port 1234
var tcpServer = net.createServer(function(client) {
    console.log(client)
});
tcpServer.listen(1234);

exports.run = function(config, ready) {

    // Connect DB
    mongoose.connect(config.database);
    
    // Creates the server.
    var server = new xmpp.C2SServer({
        port: 5222,
        domain: 'warface',
        tls: {
            keyPath: './tls/warface.key',
            certPath: './tls/warface.crt'
        }
    });
    
    //Configure the mods at the server level!
    LoadQueries.configure(server, config.vcard);
    //Router.configure(server, config.router); 
    //Logger.configure(server, config.logger);
    //Offline.configure(server, config.offline);
    //Version.configure(server, config.version);
    //Presence.configure(server, config.presence);
    //Message.configure(server, config.presence);
    //Roster.configure(server, config.roster);
    //DiscoInfo.configure(server, config.disco);
    //VCard.configure(server, config.vcard);
    //Websocket.configure(server, config.websocket);
    //S2S.configure(server, config);
    //Ping.configure(server, config.ping);

    console.log("-------------------------------------"+"\n"+
        "Warface Privado!"+"\n"+
        "Servidor XMPP iniciado!"+"\n"+
        "-------------------------------------")
    
    
    // On Connect event. When a client connects.
    server.on("connect", function(client) {

        // Allows the developer to authenticate users against anything they want.
        client.on("authenticate", function(opts, cb) {
            User.findOne({username: opts.jid.local}, function(err, user) {
                if (user.username && opts.password)
                    cb(null, opts);
                else
                    cb(new Error("Authentication failure"));
            });
        });

        // On Disconnect event. When a client disconnects
        client.on("disconnect", function(client) {
            console.log('saiu do jogo!', Math.random())
        });

    });

    
    
    ready();
}

