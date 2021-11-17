import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import { createApp } from "../_snowpack/pkg/vue.js";
import App from "./App.vue.js";

createApp(App).mount("#root");

if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
  undefined /* [snowpack] import.meta.hot */ .dispose(() => {
    app.unmount();
  });
}
