const {Client,
      Collection, 
       Discord
      } = require("discord.js");
const client = new Client({
  disableEveryone: true
});
const { config } = require('dotenv')
const { prefix } = require("./config.json");
const ms = require("ms");
const fetch = require("fetch");

//----Handler------
client.commands = new Collection();
client.aliases = new Collection();

['command'].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

//-------Ping------------
 const express = require("express");
 const app = express();

 app.get("/", (req, res) => {
	 res.send("pinging");
	
 });

 app.listen(3000, () => {
	 console.log("server started");
 });

//--------Message-------
client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  
  if (!message.content.startsWith(prefix)) return;

  // If message.member is uncached, cache it.
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (!command) return;
  if (command) command.run(client, message, args);
  
});

client.on("message", message => {
  if (message.content === "hello") {
    return message.channel.send("Subscribe to aestra-tech");
  }
});
//------status
client.on("ready", () => {
  console.log(`Hey user {client.user.username} is online`);
  client.user.setPresence({
    activity : {
      name: "Aestra Tech",
      
      // -----ALL TYPES----
      // PLAYING
      // WATCHING
      // STREAMING
      // LISTENING
      
      type: "WATCHING"
    },
    
    //TYPES
    // -- dnd ( do not disturb )
    // -- idle
    // -- invisible
    // -- online
    
    status : 'dnd'
  })
})
    


client.login(process.env.TOKEN);
