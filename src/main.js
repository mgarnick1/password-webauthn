import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createWebHistory } from "vue-router";
import createRouter from "./pages/routes.js";
import { createPinia } from "pinia";

const router = createRouter(createWebHistory());
const store = createPinia();

createApp(App).use(router).use(store).mount("#app");
