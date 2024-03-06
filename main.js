const TelegramBot = require("node-telegram-bot-api")

const token = ""

const options = {
    polling: true
}

const dansbot = new TelegramBot(token, options )

// dansbot.on('message', (callback) => {
//     const id = callback.from.id
//     dansbot.sendMessage(id, callback.text) 
// })

const prefix = "."

const sayHi = new RegExp(`^${prefix}halo$`)
const gempa = new RegExp(`^${prefix}gempa$`)

dansbot.onText(sayHi, (callback) => {
    dansbot.sendMessage(callback.from.id, "halo juga")
})

dansbot.onText(gempa, (callback) => {
    dansbot.sendMessage(callback.from.id, "Ini berita gempa")
})