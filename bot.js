const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("590810185006841860")
setInterval(function() {
channel.send(`ilyes ilyes ilyes ilyes ilyes`);
}, 30)
})

client.login(process.env.BOT_TOKEN);