var rpc = require("discord-rpc")
var dotenv = require('dotenv');
const client = new rpc.Client({ transport: 'ipc' })
//EXELVI è stato qui :)
var appid = "797101072291987466"

var pic = "https://i.imgur.com/exkCP9x.png"
var pictext = "EXELVI"

var text = "Entra nel server discord!"

var button1text = "Server Discord"
var button1link = "https://carota.com"



client.on('ready', () => {
    console.log("Ready")
        console.log("Autenticato per l'utente", client.user.username);
        client.request('SET_ACTIVITY', {
                        pid: process.pid,

            activity: {
                details: text,

                assets: {
                    large_image: pic,
                    large_text: pictext
                                    },

               buttons: [{
                       label: button1text,
                       url: button1link
                   }
                                  ]

            }
        })
    }),
    client.login({
        clientId: appid
    })

    // Fatto con ❤ da EXELVI :)