<template>
  <v-layout>
    <v-app-bar color="info" density="compact" elevation="1">
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
export default {
  name: "NavBar",
  emits: ["selectLogout"],
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    selectLogout() {
      this.$emit("selectLogout");
    },
  },
};
</script>

<style></style>
