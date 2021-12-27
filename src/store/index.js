import { createStore } from "@io-scripts/store";

import { name } from "../../package.json";

export default createStore(name, {
  slots: [null, null, null],
});
