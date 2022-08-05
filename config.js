import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['5493704583368', 'Mx', true], 
  ['5493436473920', 'HHON'], 
  ['5493436617283', 'NixiSystem'], 
 ['5493436617262', 'TroyanWolf'] 
  
] //Numeros de owner 

global.mods = [] // Moderadores
global.prems = ['5493704583368', '5493436473920', '5493436617262', '5493436617283']  // El usuario Premium tiene diamantes ilimitado
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  zenz: 'https://zenzapis.xyz',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'dylux-bot'
global.author = '@fg98._'
global.igfg = '\n▢ Sígueme en Instagram\nhttps://www.instagram.com/fg98._\n' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱▱*'

global.multiplier = 69 // Cuanto más alto, más difícil subir de nivel


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
