const { createScript } = require("io-scripts");

const { name, version, description, author } = require("../package.json");

const script = createScript({
  info: {
    name,
    version,
    description,
    author,
  },
  chatElementSelector: "#chtbox",
  silent: true,
});

const commands = require("./commands");
commands.forEach((command) => script.command(command.name, command));

const plugins = require("./plugins");
plugins.forEach(([plugin, options]) => script.use(plugin, options));
