<template>
  <h1>{{ user.name }}</h1>
</template>

<script>
import { mapActions, mapState, mapStores } from "pinia";
import { userStore } from "../stores/users.js";
export default {
  name: "Login",
  data() {
    return {};
  },
  computed: {
    ...mapState(userStore, ["user"]),
  },
  methods: {
    ...mapActions(userStore, ["fetchUser"]),
  },
  created() {
    this.fetchUser();
  },
};
</script>

<style scoped></style>
