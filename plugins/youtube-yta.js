let limit = 50
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `✳️ Ejemplo :\n${usedPrefix + command} https://www.youtube.com/watch?v=sVx1mJDeUjY`
 //m.reply('*⌛ _Cargando..._ ▬▬▬▭*')
 let chat = global.db.data.chats[m.chat]
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrems || isOwner ? 350 : limit) * 3074
  let audio, source, res, link, lastError, isLimit
  for (let i in _audio) {
    try {
      audio = _audio[i]
      isLimit = limitedSize < audio.fileSizeH
      if (isLimit) continue
      link = await audio.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      audio = link = source = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw '❎ Error: ' + (lastError || 'no puedo descargar el audio')
 
 m.reply(isLimit ? `≡ *NX MUSIC* 
  
▢ *📌Titulo:* ${title}
▢ *⚖️ Peso:* ${audio.fileSizeH}
▢ *El archivo supera el límite de descarga*
*Gratis :*
${limit} mb
▬▬▬▭▭ *300 MB*
*Premium :*
300 mb
▬▬▬▬▬ *300 MB*`: global.wait) 
  if (!isLimit) await conn.sendFile(m.chat, source, title + '.mp3', `
≡  *FG MUSIC*
    
▢ *📌Título* : ${title}
▢ *📟 Ext* : mp3
▢ *⚖️Peso* : ${audio.fileSizeH}
`.trim(), m, null, {
    asDocument: chat.useDocument
  })
}
handler.help = ['ytmp3 <link yt>']
handler.tags = ['downloader']
handler.command = ['ytmp3', 'fgmp3'] 

handler.limit = true
handler.exp = 0

export default handler
