const { getEmojiId } = require("./emoji");

function customEmoji(name, fallback = "✨") {
  const id = getEmojiId(name);

  if (!id) return fallback;

  return `<tg-emoji emoji-id="${id}">${fallback}</tg-emoji>`;
}

function getStartMenu(name = "User") {
  return (
    `╭━━━〔 ${customEmoji("emoji01", "👑")} ᴇᴍᴏᴊɪ ᴅʏɴᴀsᴛʏ 〕━━━╮\n` +
    `┃\n` +
    `┃ ${customEmoji("emoji02", "👋")} ʜᴇʟʟᴏ, <b>${name}</b>\n` +
    `┃\n` +
    `┃ ${customEmoji("emoji03", "✨")} ᴛᴇʟᴇɢʀᴀᴍ ᴘʀᴇᴍɪᴜᴍ\n` +
    `┃ ${customEmoji("emoji04", "🎨")} ᴄᴜsᴛᴏᴍ ᴇᴍᴏᴊɪ ᴍᴀɴᴀɢᴇʀ\n` +
    `┃\n` +
    `┃ ${customEmoji("emoji05", "📚")} sᴛᴏʀᴇ & ᴏʀɢᴀɴɪᴢᴇ\n` +
    `┃ ${customEmoji("emoji06", "🧪")} ᴛᴇsᴛ ᴇᴍᴏᴊɪ\n` +
    `┃ ${customEmoji("emoji07", "💻")} ɢᴇɴᴇʀᴀᴛᴇ ᴄᴏᴅᴇ\n` +
    `┃\n` +
    `╰━━━━━━━━━━━━━━━━━━━━╯`
  );
}

const startKeyboard = {
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
};

module.exports = {
  customEmoji,
  getStartMenu,
  startKeyboard
};
