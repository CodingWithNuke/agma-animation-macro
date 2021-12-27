import { createScript } from "io-scripts";

const script = createScript({
  chatElementSelector: "#chtbox",
  silent: true,
  prefix: "/aam ",
});

import * as commands from "./commands";
for (const name in commands) {
  const command = commands[name];
  script.command(command.name, command);
}

import plugins from "./plugins";
for (const [plugin, options] of plugins) {
  script.use(plugin, options);
}
