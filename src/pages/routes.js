import { createRouter } from "vue-router";
import Login from "../components/Login.vue";
import HomePage from "../components/HomePage.vue";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
];

export default function (history) {
  return createRouter({
    history,
    routes,
  });
}
