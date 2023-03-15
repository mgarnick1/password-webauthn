<template>
  <div>
    <NavBar :user="user" @selectLogout="logoutUser" />
  </div>
</template>

<script>
import { mapActions, mapState, mapStores } from "pinia";
import { userStore } from "../stores/users.js";
import NavBar from "./NavBar.vue";
export default {
  name: "HomePage",
  computed: {
    ...mapState(userStore, ["user", "showLogin"]),
  },
  components: {
    NavBar,
  },
  methods: {
    ...mapActions(userStore, ["logoutUserAction"]),
    async logoutUser() {
      await this.logoutUserAction();
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style></style>
