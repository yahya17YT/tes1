let fs = require('fs')
let handler = async (m, { conn }) => {
	let anu = `
┏━━━ *[SEWA BOT]* ━━━
├➥ Mau Sewa?: wa.me/6285784715971
┗━━━━━━━━━━━━━━━━━━━━━━━━ `
conn.sendBut(m.chat, esce, wm3, 'Mau_Sewa?', m) 
}
handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)?$/i

module.exports = handler