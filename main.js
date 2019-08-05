const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjA2NjYwNDcwNDIxNzE3MDE4.XUhQkg.n3PFRC7Vlbv2oqsy9JINezDOkxw');