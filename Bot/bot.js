const { Bot } = require('grammy');
const { Telegraf } = require('telegraf');
const TOKEN = '5792228806:AAFY2x37WF4oJButUNDQ7CSinQc_qy5kVr8'
const bot = new Telegraf(TOKEN);

const bot1 = new Bot(TOKEN);

const web_link = "https://golden-stardust-f630c1.netlify.app/"


// bot.start((ctx) =>
//     ctx.reply('Добро пожаловать ', {
//         reply_markup: { keyboard: [[{ text: "Book", web_app: {url: web_link} }]] }
//     })
// );

bot1.api.setMyCommands([
    {command: "start", description: "Запустить бот"},
])

bot.start((ctx) => {
    ctx.reply(`Добро пожаловать, ${ctx.from.first_name}📚.
    
    
Нажмите на кнопку ниже, чтобы прочитать ваши любимые книги! 📖`, {
        reply_markup: {
            inline_keyboard: [
                [ { text: "Open in browser", web_app: {url: "https://golden-stardust-f630c1.netlify.app/"} }],
            ]
        }
    });
});


bot.on("text", function (ctx) {

    if (ctx.message.text.includes("Добр")) {
        ctx.reply(`Здравствуйте, ${ctx.message.chat.first_name}`)
    } else {
        ctx.reply("???");
    }
});

bot.launch();