import { Telegraf, Markup, Context } from "telegraf";

const token = "7480673844:AAGi0IdX6ULIyLjJsXjrsbMxionAAd-uN_0";
const webAppUrl = "https://clicker-fruit.vercel.app/";

const bot = new Telegraf(token);

bot.command("start", (ctx: Context) => {
	ctx.reply(
		"Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение",
		Markup.keyboard([
			Markup.button.webApp("Отправить сообщение", `${webAppUrl}/feedback`),
		])
	);
});

bot.launch();