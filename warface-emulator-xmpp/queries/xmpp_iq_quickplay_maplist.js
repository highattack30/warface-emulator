var ltx = require('ltx');

exports.module = function(client, stz) {
        quickplay_maplist = ltx.parse(
            "<iq to='"+stz.attrs.from+"' type='get'>"+
            "<query xmlns='urn:cryonline:k01'>"+
                "<quickplay_maplist>"+
                    "<map mission='73904867-1107-4db2-a7eb-4593d580f835'/>"+
                    "<map mission='e1129d41-42fd-4451-b729-4b7ff5f4e3e7'/>"+
                    "<map mission='d0af9f60-6402-11c4-8d37-8c89a553425b'/>"+
                    "<map mission='70e29d78-bb85-4014-8989-ffeb9074d2bc'/>"+
                    "<map mission='959ddc2d-9bb4-4eab-9be8-8e04e76d94aa'/>"+
                    "<map mission='2124463b-0612-4882-a5de-b222b21bf0e6'/>"+
                    "<map mission='3f57cdb0-010a-11e5-a726-8c99a553325b'/>"+
                "</quickplay_maplist>"+
            "</query>"+
            "</iq>"
        )
        client.send(quickplay_maplist)
}