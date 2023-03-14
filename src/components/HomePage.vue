<template>
  <div>
    <NavBar :user="user" @selectLogout="() => {}" />
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
};
</script>

<style></style>
