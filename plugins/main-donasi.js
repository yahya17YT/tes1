let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'donasi'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
├ Dana : 085784715971
├ Pulsa : 085784715971
├ Gopay : 085784715971
├ Ovo : 085784715971
├ Shopeepay : 085784715971
└────
Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
wa.me/${numberowner} (Owner)

*donasi via follow ig juga boleh*`
  conn.sendButtonImg(m.chat, fla + teks, anu, instagram, 'Back', '.help', m) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler