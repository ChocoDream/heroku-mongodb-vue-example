import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#root");

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.unmount();
  });
}
