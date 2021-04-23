const ayarlar = require('../ayarlar.json');

module.exports = client => {
  client.user.setActivity(`SA`);//Oynuyor yerini Yaz knk
   
// Kaç Kullancı olduğunu görmek için
// ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı! 🔥

  console.log(``);
};

