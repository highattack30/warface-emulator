module.exports = {
    port: 5222,
    domain: 'warface',

    // logging
    logger: false,

    //tls: {
    //    keyPath: '/etc/xmpp-server/tls/localhost-key.pem',
    //    certPath: '/etc/xmpp-server/tls/localhost-cert.pem'
    //},
    
    // Listen on websockets
    websocket: {
        port: 5280
    },

    'secret': 'ilovescotchyscotch',
    'database': 'mongodb://localhost:27017/amazing'
    
};
