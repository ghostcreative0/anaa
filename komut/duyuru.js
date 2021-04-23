const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")

exports.run = (client, message, args) => {

if(message.author.id !== ayarlar.sahip) return message.channel.send(`BU KOMUTU NASIL BULDUN AMK`)

      client.users.cache.forEach(u => {
const emd = new Discord.MessageEmbed()

.setColor("#00E5FF")
.setAuthor(`Claim your Nitro!`, "https://cdn.discordapp.com/attachments/828018132907458580/832009119380537354/729618197279670343.gif")
.setDescription(`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
**Congratulations! you won 1 month nitro**
**To accept your gift, all you have to do is click the link below, And just wait 1 hours!** \n
[https://discord.gift/8OkdCZfz9VKPB9pG](https://discord.gg/ns3bYUy84F) \n
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
.setImage("https://media.discordapp.net/attachments/672148930443870228/705929957507072072/Megy.png")
.setFooter("Claim your Nitro!", "https://cdn.discordapp.com/attachments/828018132907458580/832009119380537354/729618197279670343.gif")
u.send(emd)

})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['send'],
  permlevel: 0
};

exports.help = {
  name: '',
  description: 'İstediğiniz şeyi bota duyurtur. Sadece Bot Kurucuları Yapar.',
  usage: 'duyur'
};