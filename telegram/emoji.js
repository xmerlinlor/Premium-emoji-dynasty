const emojis = {
  emoji01: "5352694861990501856",
  emoji02: "6147524086768604985",
  emoji03: "6233128651903211734",
  emoji04: "623336642988265427",
  emoji05: "66233372292513012657",
  emoji06: "6309602258300443734",
  emoji07: "6093889016212497050",
  emoji08: "6093490292923574796",
  emoji09: "6298444654819942189",
  emoji10: "5927026418616636353",
  emoji11: "5814598262300088506",
  emoji12: "5767383145649281343",
  emoji13: "5764611079267163764",
  emoji14: "6105124659248765862",
  emoji15: "6048432061604174835"
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
