const discord = require("discord.js");
const { prefix } = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {
  let embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(bot.user.avatarURL)
    .setTitle(`:white_small_square: ${bot.user.username} BotList Menüsü`)
  	.addField(`:white_small_square: ${prefix}sertifika`, "Botunuza Sertifika basvurusu yaparsınız")
  	.addField(`:white_small_square: ${prefix}sertifika-onay <botsahipid> <botid>`, "Botu Onaylanan Kişinin Sertifika Başvurusunu Onaylar")
  	.addField(`:white_small_square: ${prefix}sertifika-reddet <botsahipid> <botid> <sebeb>`, "Botu Onaylanan Kişinin Sertifika Başvurusunu Reddeder.")
  	.addField(`:white_small_square: ${prefix}sertifika-üye-rol @rol`, "Sertifika onaylayınca bot sahibine verilcek olan rolü ayarlar.")
  	.addField(`:white_small_square: ${prefix}sertifika-üye-rol sıfırla`, "Sertifika onaylayınca bot sahibine verilcek olan rolü sıfırlar.")
  	.addField(`:white_small_square: ${prefix}sertifika-bot-rol @rol`, "Sertifika onaylayınca bot sahibine verilcek olan rolü ayarlar.")
  	.addField(`:white_small_square: ${prefix}sertifika-bot-rol sıfırla`, "Sertifika onaylayınca bot sahibine verilcek olan rolü sıfırlar.")
  	.addField(`:white_small_square: ${prefix}sertifika-ekleme-log #kanal`, "Hangi Kanalda sadece sertifika basvurusu yapılcanı ayarlar.")
  	.addField(`:white_small_square: ${prefix}sertifika-ekleme-log sıfırla`, "Hangi Kanalda sadece sertifika basvurusu yapılcanı sıfırlar.")
  	.addField(`:white_small_square: ${prefix}sertifikalog #kanal`, "Sertifikanın reddedilip onaylandıgının atıcagı logu ayarlar.")
  	.addField(`:white_small_square: ${prefix}sertifikalog sıfırla`, "Sertifikanın reddedilip onaylandıgının atıcagı logu sıfırlar.")
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardım2","help2"],
  PermLevel: 0
};

exports.help = {
  name: "help2",
  description: "Bot Yardım Menüsü",
  usage: "yardım"
};
