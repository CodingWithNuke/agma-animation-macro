import { defineCommand } from "io-scripts";
import { useAlert, Colors } from "@io-scripts/alert";

import store from "../store";

import { isNumeric } from "../utils";
import { ANIMATIONS } from "../constants";

export default defineCommand({
  name: "set",
  run: (script, chatCtx, [slot, value]) => {
    if (!slot) {
      useAlert(`A slot number must be provided.`, {
        alertElementSelector: "#curser",
        textColor: Colors.RED,
      });

      return;
    }

    if (!value) {
      useAlert(`A animation must be provided.`, {
        alertElementSelector: "#curser",
        textColor: Colors.RED,
      });

      return;
    }

    if (!isNumeric(slot) && slot !== "*" && slot.toLowerCase() !== "all") {
      useAlert('Slot number must be a valid number, "*" or "all".', {
        alertElementSelector: "#curser",
        textColor: Colors.RED,
      });

      return;
    }

    if (!ANIMATIONS.includes(value.toLocaleLowerCase())) {
      useAlert(`"${value}" is not a valid animation name.`, {
        alertElementSelector: "#curser",
        textColor: Colors.RED,
      });

      return;
    }

    if (slot === "*" || slot.toLowerCase() === "all") {
      store.state.slots.forEach((_, idx, slots) => {
        slots[idx] = value;
      });

      useAlert(`All slots have been set to "${value}"`, {
        alertElementSelector: "#curser",
        textColor: Colors.LIME,
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

    store.state.slots[slot - 1] = value;

    useAlert(`Slot "#${slot}" is set to "${value}".`, {
      alertElementSelector: "#curser",
      textColor: Colors.LIME,
    });
  },
});
