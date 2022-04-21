const { Client, Intents, Message } = require("discord.js");
const { token } = require('./config.json');
const ms = require('ms')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

client.once('ready',() => {
    console.log('Ready!');
});

client.on("messageCreate", async msg =>{
    if(msg.content === ',,ping'){
        msg.channel.send("pong");
    }
    if(msg.content.match("discord.gg")){
        msg.delete();
        let warn = msg.channel.send("No links allowed while antilink is activated").then((warn) => {
        setTimeout(function () {
            warn.delete();
        }, ms("30s"));
        });
    }
    if(msg.content === 'antilinkyes'){
        return;
    }
});

client.on('guildMemberAdd', async member => {
    
})
client.login(token);