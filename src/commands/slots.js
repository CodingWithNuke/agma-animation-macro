const { defineCommand } = require("io-scripts");
const { useAlert, Colors } = require("@io-scripts/alert");

const store = require("../store");

const { ANIMATIONS } = require("../constants");
const { isNumeric } = require("../utils");

const SUB_COMMANDS = ["reset", "set"];

module.exports = defineCommand({
  name: "slots",
  run: (script, chatCtx, [subCommand, valueOrSlot, value]) => {
    if (!SUB_COMMANDS.includes(subCommand)) {
      useAlert(
        `Invalid subcommand. Allowed subcommands: ${SUB_COMMANDS.join(", ")}.`,
        {
          alertElement: "#curser",
          textColor: Colors.RED,
        }
      );
      return;
    }

    if (subCommand === "reset") {
      if (!valueOrSlot) {
        store.state.slots = [null, null, null];

        useAlert("All slots have been reset.", {
          alertElement: "#curser",
          textColor: Colors.LIME,
        });
        return;
      }

      if (!isNumeric(valueOrSlot)) {
        useAlert("Value must be a valid number.", {
          alertElement: "#curser",
          textColor: Colors.RED,
        });
        return;
      }

      if (valueOrSlot > 3) {
        useAlert("Highest slot number is 3.", {
          alertElement: "#curser",
          textColor: Colors.RED,
        });
        return;
      }

      if (valueOrSlot < 1) {
        useAlert("Lowest slot number is 1.", {
          alertElement: "#curser",
          textColor: Colors.RED,
        });
        return;
      }

      store.state.slots[valueOrSlot - 1] = null;

      useAlert(`Slot "${valueOrSlot}" has been reset.`, {
        alertElement: "#curser",
        textColor: Colors.LIME,
      });
      return;
    }

    if (subCommand === "set") {
      if (isNumeric(valueOrSlot)) {
        if (!ANIMATIONS.includes(value)) {
          useAlert(`"${value}" is not a valid animation.`, {
            alertElement: "#curser",
            textColor: Colors.LIME,
          });
          return;
        }

        store.state.slots[valueOrSlot - 1] = value;

        useAlert(`Slot "${valueOrSlot}" has been set to "${value}".`, {
          alertElement: "#curser",
          textColor: Colors.LIME,
        });
        return;
      }

      if (ANIMATIONS.includes(valueOrSlot)) {
        store.state.slots.forEach((_, idx, slotsArray) => {
          slotsArray[idx] = valueOrSlot;
        });

        useAlert(`All slots have been set to "${valueOrSlot}".`, {
          alertElement: "#curser",
          textColor: Colors.LIME,
        });
        return;
      }
    }
  },
});
