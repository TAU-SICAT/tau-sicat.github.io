import { createApp } from "vue";
import VueAnimXyz from "@animxyz/vue3";
import "@animxyz/core";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/sass/index.scss";

createApp(App).use(VueAnimXyz).use(store).use(router).mount("#app");
