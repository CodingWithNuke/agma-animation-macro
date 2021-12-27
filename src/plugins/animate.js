import { definePlugin, createChatContext } from "io-scripts";
import { isWriting } from "@io-scripts/utils";

import store from "../store";

export default definePlugin((script, options) => {
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
