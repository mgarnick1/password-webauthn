import { createRouter } from "vue-router";
import Login from "../components/Login.vue";

const routes = [
  {
    path: "/",
    component: Login,
  },
];

export default function (history) {
  return createRouter({
    history,
    routes,
  });
}
