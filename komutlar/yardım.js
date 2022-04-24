const discord = require("discord.js");
const { prefix } = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {
  let embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(bot.user.avatarURL)
    .setTitle(`:white_small_square: ${bot.user.username} BotList Menüsü`)
    .addField(`:white_small_square: ${prefix}onayla <sahipid> <botid>`, "Botu Kabul Eder")
    .addField(`:white_small_square: ${prefix}reddet <botsahip id> <nedeni>`, "Üyenin Botunu Reddedir")
    .addField(
      `:white_small_square: ${prefix}bot-ekleme-log #kanal`,
      "Hangi Kanalda Üyenin Botu ekleyebilceni ayarlar)"
    )
    .addField(`:white_small_square: ${prefix}bot-ekleme-log sıfırla`, "Üyenin Hangi kanalda botu ekleyeni kapatır!")
    .addField(`:white_small_square: ${prefix}botlog #kanal`, "Botun reddedilip onaylanan bekliyenleri gözüken logu ayarlar!")
    .addField(`:white_small_square: ${prefix}botlog sıfırla`, "Botun reddedilip onaylanan bekliyenleri gözüken logu sıfırlar!")
    .addField(`:white_small_square: ${prefix}botlist-yetkili-rol`, "Botlistte botu onaylıcak reddedicek rolü ayarlar!")
    .addField(`:white_small_square: ${prefix}botlist-yetkili-rol sıfırla`, "Botları onaylıcak reddedicek rolü sıfırlar")
    .addField(`:white_small_square: ${prefix}yetkili-log #kanal`, "Botlist yetkili log kanal ayarlar")
	  .addField(`:white_small_square: ${prefix}yetkili-log sıfırla`, "Botlist Yetkili Log kanalı sıfırlar")
	  .addField(`:white_small_square: ${prefix}botekle <id> <prefix>`, "Üye botunu ekliyebilir")
	  .addField(`:white_small_square: ${prefix}botekle-üye-rol`, "Botu Onaylayınca botun sahibine vericek rolü ayarlar")
    .addField(`:white_small_square: ${prefix}botekle-üye-rol sıfırla`, "Botu Onaylayınca botun sahibine vericek rolü sıfırlar")
	  .addField(`:white_small_square: ${prefix}botekle-bot-rol`, "Botu Onaylayınca botun kendisine vericek rolü ayarlar")
  	.addField(`:white_small_square: ${prefix}botekle-bot-rol sıfırla`, "Botu Onaylayınca botun kendisine vericek rolü sıfırlar")
  	

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardım","help"],
  PermLevel: 0
};

exports.help = {
  name: "help",
  description: "Bot Yardım Menüsü",
  usage: "yardım"
};
