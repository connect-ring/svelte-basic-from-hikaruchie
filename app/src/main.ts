import { createApp } from "vue";
import { Quasar } from "quasar";
import quasarLang from "quasar/lang/ja";

import "@quasar/extras/material-icons/material-icons.css";

import "quasar/src/css/index.sass";

import App from "./App.vue";

const myApp = createApp(App);

// Quasar 導入
myApp.use(Quasar, {
  plugins: {},
  lang: quasarLang,
});

myApp.mount("#app");