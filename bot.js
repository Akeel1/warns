```js
const Discord = require('discord.js');  
const client = new Discord.Client();    

client.on("message",async msg => {//Alpha Codes
  var moment = require("moment");//npm i moment
  if(msg.content.startsWith("!warn")){
       if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.reply("ليس معك صلاحيات `ADMINISTRATOR`")
let warnc = msg.guild.channels.find("name","log");
if(!warnc) return msg.reply("**لا اجد روم باْسم ❌** `اسم الروم`")
let mention = msg.mentions.users.first();
let one = mention;
let fltr = m => m.author.id === msg.author.id
await msg.reply("**منشن العضو الان | 👤 **").then(e => {
msg.channel.awaitMessages(fltr, {time:60000, max:1
}).then(co => {
one = co.first().content;
co.first().delete();
let reason;
    let reaso;

  e.edit(`**${msg.author} ماهو السبب
1 تكرار الكلام.
2 عدم الاحترام.
3 التحدث بالروم الغير مخصص له.
4كتابة الأوامر بالروم الغير مخصص لها.
5 ايموجي غير لائق.
6 طلب اشياء.
7 ازعاج الادارة من دون سبب.
**`).then(e => {
msg.channel.awaitMessages(fltr, {time:60000, max:1
}).then(co => {
          if(co.first().content === '1') {
        reason  = "تم تحذيره بسبب تكرار الكلام"
          reaso = "تم تحذيرك بسبب تكرار الكلام"
      }else if(co.first().content === '2') {
        reason  = "تم تحذيره بسبب عدم الاحترام"
                  reaso  = "تم تحذيرك بسبب عدم الاحترام"

      }else if(co.first().content === '3') {
        reason  = "تم تحذيره بسبب التحدث بالروم الغير مخصص له"
                  reaso  = "تم تحذيرك بسبب التحدث بالروم الغير مخصص له"

      }else if{
      
      (co.first().content === '4') {
        reason  = "تم تحذيره بسبب كتابة الأوامر بالروم الغير مخصص لها"
                  reason  = "تم تحذيرك بسبب كتابة الأوامر بالروم الغير مخصص لها"
      ```
      ```js
   }else if{
      
      (co.first().content === '5') {
        reason  = "تم تحذيره بسبب ايموجي غير لائق"
                  reaso  = "تم تحذيرك بسبب ايموجي غير لائق"
      
      }else if{
      
      (co.first().content === '6') {
        reason  = "تم تحذيره بسبب طلب اشياء"
                  reaso  = "تم تحذيرك بسبب طلب اشياء"
      
      }else if{
      
      (co.first().content === '7') {
        reason  = "تم تحذيره بسبب ازعاج الادارة من دون سبب"
                  reaso  = "تم تحذيرك بسبب ازعاج الادارة من دون سبب"
      
      }else {
          return msg.reply("اختيار غير صحيح")
      }

co.first().delete();
  e.edit(`**${msg.author} تم تحذيره و وصلوة للادارة | :white_check_mark: **`).then(p => {
    p.delete(1999);
          msg.channel.send(`${one} ${reaso}`)
moment.locale("ar-sa")
let e = new Discord.RichEmbed()
.setTitle("**Warn**")
.addField("**User**", one,)
.addField("**By**", msg.author,)
.addField("**channel**", msg.channel,)
.addField("**Time**", `${moment(msg.createdAt).fromNow()}`,)
.addField("**Reason**", reason,)
warnc.send(e);
    })
})
})
})
})
  }
})
client.login(process.env.BOT_TOKEN);
```
