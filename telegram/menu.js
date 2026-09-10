const { getEmojiId } = require("./emoji");

function customEmoji(name, fallback = "⭐") {
  const id = getEmojiId(name);

  if (!id) return fallback;

  return `<tg-emoji emoji-id="${id}">${fallback}</tg-emoji>`;
}

function getStartMenu(name = "User") {
  return `╭━━━〔 ${customEmoji("emoji01", "👑")} ᴇᴍᴏᴊɪ ᴅʏɴᴀsᴛʏ 〕━━━╮
┃
┃ ${customEmoji("emoji01", "👑")} ʜᴇʟʟᴏ, <b>${name}</b>
┃
┃ ${customEmoji("emoji02", "⭐")} ᴛᴇʟᴇɢʀᴀᴍ ᴘʀᴇᴍɪᴜᴍ
┃
┃ ${customEmoji("emoji03", "✨")} ᴄᴜsᴛᴏᴍ ᴇᴍᴏᴊɪ ᴛᴇsᴛ
┃
┃ 🆔 ᴇᴍᴏᴊɪ 𝟶𝟷
┃ <code>5767383145649281343</code>
┃
╰━━━━━━━━━━━━━━━━━━━━╯`;
}

const startKeyboard = {
  inline_keyboard: [
    [
      {
        text: "🧪 ᴛᴇsᴛ ᴇᴍᴏᴊɪ",
        callback_data: "test"
      }
    ],
    [
      {
        text: "➕ ᴀᴅᴅ ᴇᴍᴏᴊɪ",
        callback_data: "add_emoji"
      }
    ]
  ]
};

module.exports = {
  customEmoji,
  getStartMenu,
  startKeyboard
};
