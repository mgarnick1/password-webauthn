<template>
  <LoginForm
    :name="name"
    :email="email"
    :email-rules="emailRules"
    :name-rules="nameRules"
    :valid="valid"
    @update:email="setEmail($event)"
    @update:name="setName($event)"
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
      if(!$event) {
       return this.valid = false;
      }
      return this.valid = true
    },
    async setEmail($event) {
      this.email = $event.value;
      const validate = await $event.form.validate()
      if(validate && validate.valid !== undefined) {
        this.valid = validate.valid
      }
    },
    async setName($event) {
      this.name = $event.value;
      const validate = await $event.form.validate()
      if(validate && validate.valid !== undefined) {
        this.valid = validate.valid
      }
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
