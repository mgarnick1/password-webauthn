<template>
  <v-form class="w-100" ref="loginForm">
    <v-row justify="center">
      <v-col cols="6">
        <v-text-field
          ref="email"
          :value="email"
          :rules="emailRules"
          label="Email"
          @input="
            $emit('update:email', {
              value: $event?.target.value,
              form: $refs.loginForm,
            })
          "
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="6">
        <v-text-field
          ref="name"
          :value="name"
          :rules="nameRules"
          label="Name"
          @input="
            $emit('update:name', {
              value: $event?.target.value,
              form: $refs.loginForm,
            })
          "
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <!-- <v-col cols="12"> -->
      <div
        class="d-flex justify-space-around align-center flex-column flex-md-row fill-height"
      >
        <v-btn color="primary" rounded="lg" size="x-large" :disabled="!valid"
          >Register</v-btn
        >
      </div>
      <!-- </v-col> -->
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "LoginForm",
  props: {
    label: {
      type: String,
      default: "",
    },
    valid: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String],
      default: "",
    },
    email: {
      type: [String, Number],
      default: "",
    },
    emailRules: {
      type: Array,
      default: () => [],
    },
    nameRules: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
