const { createChatContext, definePlugin } = require("io-scripts");
const { isWriting } = require("@io-scripts/utils");

const store = require("../store");

module.exports = definePlugin((script, options) => {
  document.addEventListener("keydown", (e) => {
    if (isWriting()) return;

    if (e.keyCode === 192) {
      e.preventDefault();
      const chatCtx = createChatContext(script.options.chatElementSelector);

      chatCtx.value(store.state.slots.filter((slot) => slot).join(" "));
      chatCtx._chatElement.focus();
    }
  });
});
