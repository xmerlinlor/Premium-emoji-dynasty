const emojis = {
  emoji01: "5767383145649281343",
  emoji02: "5927026418616636353",
  emoji03: "6298444654819942189",

  emoji04: "",
  emoji05: "",
  emoji06: "",
  emoji07: "",
  emoji08: "",
  emoji09: "",
  emoji10: "",
  emoji11: "",
  emoji12: "",
  emoji13: "",
  emoji14: "",
  emoji15: ""
};

function getEmojiId(name) {
  return emojis[name] || null;
}

function setEmojiId(name, id) {
  if (!name || !id) return false;

  emojis[name] = String(id);
  return true;
}

function getAllEmojis() {
  return { ...emojis };
}

module.exports = {
  emojis,
  getEmojiId,
  setEmojiId,
  getAllEmojis
};
