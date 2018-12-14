const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("519533478656606214")
setInterval(function() {
channel.send(`كفووووو`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
