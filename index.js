const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if(message.content === "hello") {
    return message.channel.send("Subscribe to aestra-tech")
  }
}
         )

client.login(process.env.TOKEN);
