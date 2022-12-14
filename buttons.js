module.exports = {
    firstBtnChoice: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'А давайте', callback_data: '/1'}],
                [{text: 'Нет, я грустный кудрявый тюлень', callback_data: '/2'}],
            ]
        })
    },
    btn3: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'я на месте', callback_data: '/3'}],
            ]
        })
    },
    btn4: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'сделано', callback_data: '/4'}],
            ]
        })
    },
    btn5: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'готово', callback_data: '/5'}],
            ]
        })
    },
    btn6: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'нажми, как получишь', callback_data: '/6'}],
            ]
        })
    },
    btn7: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'нажми, как будешь дома', callback_data: '/7'}],
            ]
        })
    },
    secondBtnChoice: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'нажми, как захочешь посмеяться', callback_data: '/8'}],
                [{text: 'нажми, когда захочется любви', callback_data: '/9'}],
                [{text: 'пропустить', callback_data: '/10'}],
            ]
        })
    },
    fakeSecondBtnChoice: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'нажми, как захочешь посмеяться', callback_data: '/88'}],
                [{text: 'нажми, когда захочется любви', callback_data: '/99'}],
            ]
        })
    },
    btn10: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'дальше', callback_data: '/10'}],
            ]
        })
    },
    btn11: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'да', callback_data: '/11'}],
                [{text: 'не пойду)))', callback_data: '/11'}],
            ]
        })
    },
    btn12: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'нажми, как выйдешь из квартиры', callback_data: '/12'}],
            ]
        })
    },
    btn13: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'дальше!', callback_data: '/13'}],
            ]
        })
    },
    threeBtnChoice: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'мытный дворъ', callback_data: '/14'}],
                [{text: 'сизиф', callback_data: '/15'}],
                [{text: 'генсек', callback_data: '/16'}],
                [{text: 'межелик', callback_data: '/17'}],
                [{text: 'бонсай', callback_data: '/18'}],
                [{text: 'нажми как посмотришь все варианты', callback_data: '/19'}],
            ]
        })
    },
}
