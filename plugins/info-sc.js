let handler = m => m.reply('Hai kak lagi nyari sc yaa? \n\n\n_*https://wa.me/6285624823115?text=Assalamualaikum%20Bagi%20sc%20nya%20bg?*_')
let tio = 'Nih Kak'
 await conn.sendFile(m.chat, 'https://database.tioclkp02.repl.co/Dengarkanlah.mp3', 'Dengarkanlah.mp3', null, m, true, {
ptt: true, contextInfo: {
        externalAdReply: { showAdAttribution: true, title: tio,
 body: wm, sourceUrl: 'https://youtube.com/channel/UCaFh82MyrVgcgIvJxvTA39w'', thumbnail: await (await fetch('https://telegra.ph/file/2b669452f7517d2b5097a.jpg')).buffer()}} 
     })

}

handler.customPrefix = /sc|Sc|Script|script/i
handler.command = new RegExp

module.exports = handler
