import { defineStore } from "pinia";

export const userStore = defineStore("users", {
  state: () => {
    return {
      user: {},
    };
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  actions: {
    fetchUser() {
      this.user = { id: 1, name: "Mark" };
    },
  },
});
