const discord = require('discord.js');

module.exports = {
  name: "test",
  run: async(client, message, args) => {
    message.channel.send('Yay Working')
  }
  
};