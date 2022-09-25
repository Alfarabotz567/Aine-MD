let fetch = require("node-fetch")
let fs = require('fs')
const delay = time => new Promise(res => setTimeout(res, time))
let moment = require('moment-timezone')
async function handler(m, {command}) {
	let res = await fetch(`https://raw.githubusercontent.com/Aisyah-Aldi/Sound/main/${command}.mp3`)
json = await res.buffer()
 conn.sendFile(m.chat, 'https://vio.wtf/uploads/1661398126172-haori.webp', 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo: {
        externalAdReply: { showAdAttribution: true, title: `${ucapan()}`, body: 'Sebentar Yah Kak Lagi Di Proses', sourceUrl: 'https://youtube.com/channel/UCaFh82MyrVgcgIvJxvTA39w', thumbnail: await (await fetch('https://telegra.ph/file/2b669452f7517d2b5097a.jpg')).buffer(),}} 
     })
await delay(1900)
  await conn.sendFile(m.chat, json, 'error.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: false, seconds: 9999999,contextInfo: { 
         externalAdReply: { 
 	     sourceUrl: 'https://youtube.com/channel/UCaFh82MyrVgcgIvJxvTA39w',
           title: '▶︎ ━━━━━━━●────────── ',  
            body: 'Now Playing...', 
           thumbnail: await (await fetch('https://telegra.ph/file/1f8e012df6e4aca2fbd11.jpg')).buffer()
}
     }
    })
 } 
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Good Morning 🌆"
  if (time >= 4) {
    res = "Good Morning 🌄"
  }
  if (time > 10) {
    res = "Good Afternoon ☀️"
  }
  if (time >= 15) {
    res = "Good Evening 🌇"
  }
  if (time >= 18) {
    res = "Good Night 🌃"
  }
  return res
    }
handler.help = ['sound1-sound119']
handler.tags = ['sound']

handler.command = /^(sound1|sound2|sound3|sound4|sound5|sound6|sound7|sound8|sound9|sound10|sound11|sound12|sound13|sound14|sound15|sound16|sound17|sound18|sound19|sound20|sound21|sound22|sound23|sound24|sound25|sound26|sound27|sound28|sound29|sound30|sound31|sound32|sound33|sound34|sound35|sound36|sound37|sound38|sound39|sound40|sound41|sound42|sound43|sound44|sound45|sound46|sound47|sound48|sound49|sound50|sound51|sound52|sound53|sound54|sound55|sound56|sound57|sound58|sound59|sound60sound61|sound62|sound63|sound64|sound65|sound66|sound67|sound68|sound69|sound70|sound71|sound72|sound73|sound74|sound75|sound76|sound77|sound78|sound79|sound80|sound81|sound82|sound83|sound84|sound85|sound86|sound87|sound88|sound89|sound90|sound91|sound92|sound93|sound94|sound95|sound96|sound97|sound98|sound99|sound100|sound101|sound102|sound103|sound104|sound105|sound106|sound107|sound108|sound109|sound110|sound111|sound112|sound113|sound114|sound115|sound116|sound117|sound118|sound119)$/i
handler.owner = false
module.exports = handler
