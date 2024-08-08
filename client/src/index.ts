import { Telegraf, Markup, Context } from "telegraf";


const token = import.meta.env.BOT;
const webAppUrl = import.meta.env.WEBAPP_URL;

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

bot.command("close", (ctx: Context) => {
	ctx.reply(
		"Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение",
		Markup.keyboard([
			Markup.button.webApp("Отправить сообщение", `${webAppUrl}/feedback`),
		])
	);
});