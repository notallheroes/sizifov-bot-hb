const TelegramApi = require('node-telegram-bot-api')
const {firstBtnChoice, btn3, btn4, btn5, btn6, btn7, secondBtnChoice, btn10, btn11, btn12, btn13, threeBtnChoice,  fakeSecondBtnChoice} = require('./buttons')
const {dataMessage} = require('./data')

const token = '5890577092:AAHYjktlXodRvoiaVzS9Gau5izJX3HeYe58'

const bot = new TelegramApi(token, {polling: true});

const start = async () => {
    const baseRespone = 'Извини, но я хуй знает чё ты пишешь, у меня не было столько времени обучиться'
    let responseOnMessage = baseRespone

    bot.setMyCommands([
        {command: '/start', description: 'Начать др'},
    ])

    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text
        if (msg.photo) bot.sendMessage(chatId, dataMessage[13].msg, btn13);
        else if (text === '/start') {
            bot.sendMessage(chatId, dataMessage[0].msg);
            setTimeout(() => {
                bot.sendMessage(chatId, dataMessage[1].msg, firstBtnChoice);
            }, 1000)
        } else {
            bot.sendMessage(chatId, responseOnMessage);
            if (responseOnMessage === 'я в шоке..') responseOnMessage = baseRespone
        }
    });

    bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;

        switch (data){
            case '/1':
            case '/4':
                await bot.sendAudio(chatId, './tomodell.mp3')
                await bot.sendMessage(chatId, dataMessage[2].msg, btn3);
                break;
            case '/2':
                responseOnMessage = 'я в шоке..'
                await bot.sendMessage(chatId, dataMessage[3].msg, btn4);
                break;
            case '/3':
                await bot.sendMessage(chatId, dataMessage[4].msg)
                await bot.sendVoice(chatId, './ioga.ogg', btn5)
                break;
            case '/5':
                await bot.sendMessage(chatId, dataMessage[6].msg, btn6)
                break
            case '/6':
                await bot.sendMessage(chatId, dataMessage[7].msg, btn7)
                break
            case '/7':
                await bot.sendMessage(chatId, dataMessage[8].msg)
                await bot.sendMessage(chatId, dataMessage[9].msg, secondBtnChoice)
                break
            case '/8':
            case '/88':
                await bot.sendPhoto(chatId, 'https://i.ibb.co/3srWjK3/mem1.jpg')
                await bot.sendPhoto(chatId, 'https://i.ibb.co/xFY7f9F/mem2.jpg')
                await bot.sendPhoto(chatId, 'https://i.ibb.co/8NQsGQ9/mem3.jpg')
                await bot.sendPhoto(chatId, 'https://i.ibb.co/QCJfNVn/mem4.jpg')
                await bot.sendPhoto(chatId, 'https://i.ibb.co/1Xy9y8D/mem5.jpg')
                await bot.sendPhoto(chatId, 'https://i.ibb.co/DzBNJDf/mem6.jpg')
                await bot.sendPhoto(chatId, 'https://i.ibb.co/j4W5pws/mem7.jpg')
                await bot.sendPhoto(chatId, 'https://i.ibb.co/drZkM3V/mem8.jpg')
                await bot.sendPhoto(chatId, 'https://i.ibb.co/hRM55r0/mem9.jpg')
                if (data === '/8') await bot.sendMessage(chatId, 'посмеялись над Даниными (и чучуть чужими) мемами?', btn10)
                break
            // TODO
            case '/9':
            case '/99':
                break
            case '/10':
                await bot.sendMessage(chatId, dataMessage[10].msg, btn11)
                break
            case '/11':
                await bot.sendMessage(chatId, dataMessage[11].msg, btn12)
                break
            case '/12':
                await bot.sendMessage(chatId, dataMessage[12].msg)
                break
            case '/13':
                await bot.sendMessage(chatId, dataMessage[14].msg, threeBtnChoice)
                break
            case '/14':
                await bot.sendVoice(chatId, './mitniidvor.ogg', threeBtnChoice)
                break
            case '/15':
                await bot.sendPhoto(chatId, 'https://i.ibb.co/pxHCrzb/sizif.jpg', threeBtnChoice)
                break
            case '/16':
                await bot.sendPhoto(chatId, 'https://i.ibb.co/f4BkKXQ/gensek.jpg', threeBtnChoice)
                break
            case '/17':
                await bot.sendPhoto(chatId, 'https://i.ibb.co/6rJY2dT/mezhelik.jpg', threeBtnChoice)
                break
            case '/18':
                await bot.sendPhoto(chatId, 'https://i.ibb.co/kJnksmL/bonsai.jpg', threeBtnChoice)
                break
            case '/19':
                await bot.sendMessage(chatId, dataMessage[15].msg, fakeSecondBtnChoice)
                break
            default: return null
        }
    })
}

start()
