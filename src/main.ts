import { createApp } from "vue";
import App from "./app.vue";
import "./assets/styles/global.scss";
import { router } from "./config/router";

const app = createApp(App);
app.use(router);

router.isReady().then(() => {
  app.mount("#app");
});
