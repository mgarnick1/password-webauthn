<template>
  <LoginForm
    :name="name"
    :email="email"
    :email-rules="emailRules"
    :name-rules="nameRules"
    :valid="valid"
    :show-login="showLogin"
    @update:email="setEmail($event)"
    @update:name="setName($event)"
    @registration="submitRegistration()"
    @toggleLogin="toggleLogin()"
    @loginWithUser="()=> {}"
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
    showLogin: false,
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
    validation(loginForm, email, name) {
      const validate = loginForm.items?.every((i) => i.isValid);
      if (
        validate !== undefined &&
        email &&
        /.+@.+\..+/.test(email) &&
        name &&
        name.length <= 10
      ) {
        this.valid = validate;
      } else {
        this.valid = false;
      }
    },
    setEmail($event) {
      this.email = $event.value.trim();
      this.validation($event.form, this.email, this.name);
    },
    setName($event) {
      this.name = $event.value.trim();
      this.validation($event.form, this.email, this.name);
    },
    async submitRegistration() {
      await this.register(this.email, this.name)
    },
    toggleLogin() {
      this.showLogin = !this.showLogin
    }
  },
  async created() {
    this.fetchUser();
    // await this.register("markgman008@gmail.com", "Mark")
  },
  components: { LoginForm },
};
</script>

<style scoped></style>
