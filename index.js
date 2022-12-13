const TelegramApi = require('node-telegram-bot-api')

const token = '5890577092:AAHYjktlXodRvoiaVzS9Gau5izJX3HeYe58'

const bot = new TelegramApi(token, {polling: true});

bot.on('message', (msg) => {
    const username = msg.name;
    const chatId = msg.chat.id;
    const text = msg.text.toString().toLowerCase();


    const message = 'privet pizda'
    bot.sendMessage(chatId, message);
});
