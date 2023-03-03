<template>
  <LoginForm
    :name="name"
    :email="email"
    :email-rules="emailRules"
    :name-rules="nameRules"
    @update:email="setEmail($event)"
    @update:name="setName($event)"
    @update:form="validation($event)"
  ></LoginForm>
</template>

<script>
import { mapActions, mapState, mapStores } from "pinia";
import { userStore } from "../stores/users.js";
import LoginForm from "./LoginForm.vue";
export default {
  name: "Login",
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      (value) => {
        if (value) return true;
        return "Name is requred.";
      },
      (value) => {
        if (value?.length <= 10) return true;
        return "Name must be less than 10 characters.";
      },
    ],
    email: "",
    emailRules: [
      (value) => {
        if (value) return true;
        return "E-mail is requred.";
      },
      (value) => {
        if (/.+@.+\..+/.test(value)) return true;
        return "E-mail must be valid.";
      },
    ],
  }),
  computed: {
    ...mapState(userStore, ["user"]),
  },
  methods: {
    ...mapActions(userStore, ["fetchUser", "register"]),
    validation($event) {
      debugger
      this.valid = $event
    },
    setEmail($event) {
      this.email = $event;
      this.validation()
    },
    setName($event) {
      this.name = $event;
      this.validation()
    },
  },
  async created() {
    this.fetchUser();
    // await this.register("markgman008@gmail.com", "Mark")
  },
  components: { LoginForm },
};
</script>

<style scoped></style>
