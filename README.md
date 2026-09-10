👑 EMOJI DYNASTY

«⚡ Telegram Premium Custom Emoji Manager»

Emoji Dynasty is a Telegram bot designed to collect, organize, test, and manage Telegram Premium Custom Emoji IDs.

✦ Features

- 👑 Add Custom Emoji IDs
- 🔎 Detect Custom Emoji IDs
- 📚 Emoji Library
- 🗂️ Emoji Categories
- ⭐ Favorite Emojis
- 🧪 Test Custom Emojis
- 📋 Copy Emoji IDs
- 💻 Generate JavaScript code
- 📤 Export Emoji configuration
- 👑 Owner/Admin controls
- 💾 JSON-based storage
- 🚀 Render-ready
- 🔐 Protected admin system

🛠️ Tech Stack

- Node.js
- Telegraf
- Express
- JSON Database
- GitHub
- Render

📁 Project Structure

emoji-dynasty/
├── index.js
├── package.json
├── config.js
├── README.md
│
├── telegram/
│   ├── handlers.js
│   ├── menu.js
│   └── emoji.js
│
├── database/
│   └── emojis.json
│
└── public/
    └── index.html

⚙️ Installation

Clone the repository:

git clone https://github.com/YOUR_USERNAME/emoji-dynasty.git
cd emoji-dynasty

Install dependencies:

npm install

Create your environment file:

BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
OWNER_ID=YOUR_TELEGRAM_USER_ID

Start the bot:

npm start

👑 How It Works

Send a Telegram Premium Custom Emoji to the bot.

The bot detects the custom emoji and saves its ID.

Example:

👑 Custom Emoji

ID:
5368324170671202286

The ID can then be used in your Telegram bots.

💻 Generated JavaScript

Emoji Dynasty can generate code such as:

const EMOJI = {
  crown: "5368324170671202286",
  shield: "1234567890123456789",
  fire: "9876543210987654321"
};

module.exports = EMOJI;

📚 Categories

👑 Royal
🛡️ Security
⚡ Energy
🔥 Fire
💎 Luxury
🤖 AI
💻 Developer
🎮 Gaming

🔐 Security

The bot should never expose:

- Telegram Bot Token
- Admin credentials
- Private configuration
- Internal database files

Only authorized administrators can manage the emoji library.

🚀 Deployment

Emoji Dynasty is designed to run on:

GitHub → Render

Set these environment variables on Render:

BOT_TOKEN
OWNER_ID

Then use:

npm start

👑 Credits

Emoji Dynasty

Built for premium Telegram custom emoji management.

Owner: Mr Dark King Dev

---

⚡ Status

🟢 Project: EMOJI DYNASTY
🟢 Platform: Telegram
🟢 Runtime: Node.js
🟢 Hosting: Render
🟢 Storage: JSON
🟢 Custom Emoji: Supported
