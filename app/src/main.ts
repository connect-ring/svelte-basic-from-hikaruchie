import { createApp } from "vue";
import { Quasar, Dialog } from "quasar";
import quasarLang from "quasar/lang/ja";
import router from "./router";
// import { key, store } from "./store";

import App from "./App.vue";

// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

const myApp = createApp(App);

// Quasar 導入
myApp.use(Quasar, {
	plugins: { Dialog }, // import Quasar plugins and add here
	lang: quasarLang
});

// Vue Router 導入
myApp.use(router);

// Vuex 導入
// myApp.use(store, key);

myApp.mount("#app");
