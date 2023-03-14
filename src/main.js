import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createWebHistory } from "vue-router";
import createRouter from "./pages/routes.js";
import { createPinia } from "pinia";
import '@mdi/font/css/materialdesignicons.css';
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const router = createRouter(createWebHistory());
const store = createPinia();

createApp(App).use(router).use(store).use(vuetify).mount("#app");
