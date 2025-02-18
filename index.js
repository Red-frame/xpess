const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { Telegraf } = require('telegraf');

   const bot = new Telegraf(process.env.BOT_TOKEN);

   bot.start((ctx) => {
     ctx.reply('Halo! Saya adalah bot Telegram.');
   });

   bot.command('hello', (ctx) => {
     ctx.reply('Halo juga!');
   });

   bot.launch();

   // Export bot untuk Vercel
   module.exports = bot;
