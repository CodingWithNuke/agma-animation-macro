const { createStore } = require("@io-scripts/store");

const { name } = require("../../package.json");

module.exports = createStore(name, {
  slots: [null, null, null],
});
