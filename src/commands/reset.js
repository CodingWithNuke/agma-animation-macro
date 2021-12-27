import { defineCommand } from "io-scripts";
import { useAlert, Colors } from "@io-scripts/alert";

import store from "../store";

import { isNumeric } from "../utils";

export default defineCommand({
  name: "reset",
  run: (script, chatCtx, [slot]) => {
    if (!slot) {
      store.state.slots = [null, null, null];

      useAlert("All slots have been reset.", {
        alertElementSelector: "#curser",
        textColor: Colors.LIME,
      });

      return;
    }

    if (!isNumeric(slot)) {
      useAlert("Slot number must be a valid number.", {
        alertElementSelector: "#curser",
        textColor: Colors.RED,
      });

      return;
    }

    if (slot < 1 || slot > 3) {
      useAlert("Slot number must be between 1 and 3.", {
        alertElementSelector: "#curser",
        textColor: Colors.RED,
      });

      return;
    }

    store.state.slots[slot - 1] = null;

    useAlert(`Slot "#${slot}" has been reset.`, {
      alertElementSelector: "#curser",
      textColor: Colors.LIME,
    });
  },
});
