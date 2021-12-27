import { defineCommand } from "io-scripts";
import { useAlert, Colors } from "@io-scripts/alert";

import store from "../store";

import { isNumeric } from "../utils";

export default defineCommand({
  name: "show",
  run: (script, chatCtx, [slot]) => {
    if (!slot) {
      useAlert(
        `Current slots are "${store.state.slots
          .map((slot) => (slot ? slot : "unset"))
          .join(", ")}"`,
        {
          alertElementSelector: "#curser",
          textColor: Colors.WHITE,
        }
      );

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

    useAlert(`Slot "#${slot}" is set to "${store.state.slots[slot - 1]}".`, {
      alertElementSelector: "#curser",
      textColor: Colors.WHITE,
    });
  },
});
