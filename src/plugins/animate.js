const { createChatContext } = require("io-scripts");

const store = require("../store");

const { isWriting } = require("../utils");

/**
 * @param {import('io-scripts').Script} script
 * @param {any} options
 */
module.exports = (script, options) => {
  document.addEventListener("keydown", (e) => {
    if (isWriting()) return;

    if (e.keyCode === 192) {
      e.preventDefault();
      const chatCtx = createChatContext(script.options.chatElementSelector);

      chatCtx.value(store.state.slots.filter((slot) => slot).join(" "));
      chatCtx._chatElement.focus();
    }
  });
};
