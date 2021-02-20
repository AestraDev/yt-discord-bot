const Discord = require("discord.js");
const canvacord  = require("canvacord");

module.exports = {
  name: "trigger", 
  run: async(client, message, args) => {
    let avatar = message.author.displayAvatarURL({
      dynamic: false,
      format: "png"
    });
    
    let m = await message.channel.send("**Working on it....**")
    let image = await canvacord.Canvas.trigger(avatar);
    let attachment = new Discord.MessageAttachment(image, "triggered.gif");
    m.delete({ timeout : 5000});
    return message.channel.send(attachment);
  }
};
                        