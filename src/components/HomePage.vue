<template>
  <div>
    <NavBar :user="user" :quote="quote" @selectLogout="logoutUser" />
  </div>
  <Quote v-if="quote?.quote" :quote="quote" />
</template>

<script>
import { mapActions, mapState, mapStores } from "pinia";
import { userStore } from "../stores/users.js";
import { quoteStore } from "../stores/quotes";
import NavBar from "./NavBar.vue";
import Quote from "./Quote.vue";
export default {
  name: "HomePage",
  computed: {
    ...mapState(userStore, ["user", "showLogin"]),
    ...mapState(quoteStore, ["quote"]),
  },
  components: {
    NavBar,
    Quote,
  },
  async mounted() {
    if (this.user?.name) {
      this.getQuote();
    }
  },
  methods: {
    ...mapActions(userStore, ["logoutUserAction"]),
    ...mapActions(quoteStore, ["getQuotesAction"]),
    async logoutUser() {
      await this.logoutUserAction();
      this.$router.push({ path: "/" });
    },
    async getQuote() {
      await this.getQuotesAction();
    },
  },
};
</script>

<style></style>
