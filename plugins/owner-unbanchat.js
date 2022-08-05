let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('✅ Nixi activo  en este grupo')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = ['chaton', 'unbanchat'] 
handler.owner = true

export default handler
