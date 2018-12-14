const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523059521950580746")
setInterval(function() {
channel.send(`Spammm`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
