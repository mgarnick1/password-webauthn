<template>
  <v-layout>
    <v-app-bar color="primary" density="compact" elevation="1">
      <v-app-bar-title>Hello {{ user?.name }}</v-app-bar-title>
      <template v-slot:append>
        <v-btn size="large" icon @click="selectLogout">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
  </v-layout>
</template>

<script>
import { mapState } from "pinia";
import { userStore } from "../stores/users";

export default {
  name: "NavBar",
  emits: ["selectLogout"],
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    if (!this.user?.name) {
      this.$router.push({ path: "/" });
    }
  },
  methods: {
    selectLogout() {
      this.$emit("selectLogout");
    },
  },
};
</script>

<style></style>
