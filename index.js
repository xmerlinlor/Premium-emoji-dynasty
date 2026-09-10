const { Telegraf } = require("telegraf");
const express = require("express");
const config = require("./config");

const {
  getStartMenu,
  startKeyboard,
  customEmoji
} = require("./telegram/menu");

if (!config.BOT_TOKEN) {
  console.error("❌ BOT_TOKEN is missing.");
  process.exit(1);
}

const bot = new Telegraf(config.BOT_TOKEN);
const app = express();

const PORT = process.env.PORT || 3000;

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   🌐 WEB SERVER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

app.get("/", (req, res) => {
  res.send("👑 EMOJI DYNASTY ONLINE");
});

app.listen(PORT, () => {
  console.log(`🌐 Web server running on port ${PORT}`);
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   👑 START MENU
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

bot.start(async (ctx) => {
  const name = ctx.from.first_name || "User";

  await ctx.reply(
    getStartMenu(name),
    {
      parse_mode: "HTML",
      reply_markup: startKeyboard
    }
  );
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   📚 LIBRARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

bot.action("library", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    `╭━━━〔 ${customEmoji("emoji01", "📚")} ᴇᴍᴏᴊɪ ʟɪʙʀᴀʀʏ 〕━━━╮
┃
┃ ${customEmoji("emoji02", "👑")} ᴇᴍᴏᴊɪ 𝟶𝟷
┃ ${customEmoji("emoji03", "⭐")} ᴇᴍᴏᴊɪ 𝟶𝟸
┃ ${customEmoji("emoji04", "⚡")} ᴇᴍᴏᴊɪ 𝟶𝟹
┃ ${customEmoji("emoji05", "🔥")} ᴇᴍᴏᴊɪ 𝟶𝟺
┃ ${customEmoji("emoji06", "💎")} ᴇᴍᴏᴊɪ 𝟶𝟻
┃
┃ ✦ ᴍᴏʀᴇ ᴇᴍᴏᴊɪs ᴄᴏᴍɪɴɢ
┃
╰━━━━━━━━━━━━━━━━━━━━╯`,
    { parse_mode: "HTML" }
  );
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ➕ ADD EMOJI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

bot.action("add_emoji", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    `${customEmoji("emoji03", "🎨")} <b>ᴀᴅᴅ ᴄᴜsᴛᴏᴍ ᴇᴍᴏᴊɪ</b>

Send me a Telegram Premium custom emoji.

I will detect its <code>custom_emoji_id</code> automatically.`,
    { parse_mode: "HTML" }
  );
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   🧪 TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

bot.action("test", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    `${customEmoji("emoji02", "🧪")} <b>ᴄᴜsᴛᴏᴍ ᴇᴍᴏᴊɪ ᴛᴇsᴛᴇʀ</b>

Send a Premium custom emoji and I will detect its ID.`,
    { parse_mode: "HTML" }
  );
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   💻 EXPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

bot.action("export", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    `${customEmoji("emoji01", "💻")} <b>ᴇxᴘᴏʀᴛ ᴄᴏᴅᴇ</b>

Your saved Premium Custom Emoji IDs can be converted into JavaScript code.`,
    { parse_mode: "HTML" }
  );
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   🎨 CUSTOM EMOJI DETECTOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

bot.on("message", async (ctx) => {
  const message = ctx.message;

  if (!message.entities) return;

  const customEmojiEntity = message.entities.find(
    (entity) => entity.type === "custom_emoji"
  );

  if (!customEmojiEntity) return;

  const emojiId = customEmojiEntity.custom_emoji_id;

  await ctx.reply(
    `╭━━━〔 ${customEmoji("emoji01", "🎨")} ᴄᴜsᴛᴏᴍ ᴇᴍᴏᴊɪ 〕━━━╮
┃
┃ ${customEmoji("emoji02", "✅")} ᴅᴇᴛᴇᴄᴛᴇᴅ
┃
┃ 🆔 <b>ᴄᴜsᴛᴏᴍ ᴇᴍᴏᴊɪ ɪᴅ</b>
┃
┃ <code>${emojiId}</code>
┃
╰━━━━━━━━━━━━━━━━━━━━╯`,
    { parse_mode: "HTML" }
  );

  console.log(`🎨 Custom Emoji ID: ${emojiId}`);
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ❌ ERROR HANDLER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

bot.catch((err) => {
  console.error("❌ Bot error:", err);
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   🚀 START BOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

bot.launch()
  .then(() => {
    console.log("👑 EMOJI DYNASTY IS ONLINE");
  })
  .catch((err) => {
    console.error("❌ Failed to start bot:", err);
  });

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
