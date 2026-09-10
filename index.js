const { Telegraf } = require("telegraf");
const express = require("express");
const config = require("./config");

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
   👑 START
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

bot.start(async (ctx) => {
  const name = ctx.from.first_name || "User";

  await ctx.reply(
    `╭━━━〔 👑 ᴇᴍᴏᴊɪ ᴅʏɴᴀsᴛʏ 〕━━━╮
┃
┃ 👋 ʜᴇʟʟᴏ, ${name}
┃
┃ ✦ Telegram Premium
┃ ✦ Custom Emoji Manager
┃
┃ 📚 Store your emoji IDs
┃ 🧪 Test custom emojis
┃ 💻 Generate bot code
┃
╰━━━━━━━━━━━━━━━━━━━━╯`,
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "📚 ᴇᴍᴏᴊɪ ʟɪʙʀᴀʀʏ", callback_data: "library" }
          ],
          [
            { text: "➕ ᴀᴅᴅ ᴇᴍᴏᴊɪ", callback_data: "add_emoji" },
            { text: "🧪 ᴛᴇsᴛ", callback_data: "test" }
          ],
          [
            { text: "💻 ᴇxᴘᴏʀᴛ ᴄᴏᴅᴇ", callback_data: "export" }
          ]
        ]
      }
    }
  );
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   🔘 BUTTONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

bot.action("library", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    `╭━━━〔 📚 ᴇᴍᴏᴊɪ ʟɪʙʀᴀʀʏ 〕━━━╮
┃
┃ 👑 ʀᴏʏᴀʟ
┃ 🛡️ sᴇᴄᴜʀɪᴛʏ
┃ ⚡ ᴇɴᴇʀɢʏ
┃ 🔥 ғɪʀᴇ
┃ 💎 ʟᴜxᴜʀʏ
┃ 🤖 ᴀɪ
┃ 💻 ᴅᴇᴠᴇʟᴏᴘᴇʀ
┃ 🎮 ɢᴀᴍɪɴɢ
┃
╰━━━━━━━━━━━━━━━━━━━━╯`
  );
});

bot.action("add_emoji", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    `➕ <b>ᴀᴅᴅ ᴄᴜsᴛᴏᴍ ᴇᴍᴏᴊɪ</b>

Send me a Telegram Premium custom emoji.

I will detect its <code>custom_emoji_id</code> automatically.`,
    { parse_mode: "HTML" }
  );
});

bot.action("test", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply("🧪 Send a custom emoji to test it.");
});

bot.action("export", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    `💻 <b>ᴇxᴘᴏʀᴛ ᴄᴏᴅᴇ</b>

Your saved emoji IDs will be converted into JavaScript code.`,
    { parse_mode: "HTML" }
  );
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   🎨 CUSTOM EMOJI DETECTOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

bot.on("message", async (ctx) => {
  const message = ctx.message;

  if (!message.entities) return;

  const customEmoji = message.entities.find(
    (entity) => entity.type === "custom_emoji"
  );

  if (!customEmoji) return;

  const emojiId = customEmoji.custom_emoji_id;

  await ctx.reply(
    `╭━━━〔 🎨 ᴄᴜsᴛᴏᴍ ᴇᴍᴏᴊɪ 〕━━━╮
┃
┃ ✅ ᴅᴇᴛᴇᴄᴛᴇᴅ
┃
┃ 🆔 ᴇᴍᴏᴊɪ ɪᴅ:
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
