require("dotenv").config();

module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  OWNER_ID: process.env.OWNER_ID,

  BOT_NAME: "👑 EMOJI DYNASTY",
  VERSION: "1.0.0",

  PREFIX: ".",

  DATABASE_FILE: "./database/emojis.json"
};
