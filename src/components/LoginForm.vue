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
    <v-row justify="center" v-if="!showLogin">
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
    <v-row justify="center" v-if="!showLogin">
      <v-col cols="6">
        <div
          class="d-flex justify-space-around align-center flex-column flex-md-row fill-height"
        >
          <v-btn
            class="w-100"
            color="primary"
            rounded="lg"
            size="x-large"
            :disabled="!valid"
            @click="$emit('registration')"
            >Register</v-btn
          >
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" v-if="showLogin">
      <v-col cols="6">
        <div
          class="d-flex justify-space-around align-center flex-column flex-md-row fill-height"
        >
          <v-btn
            class="w-100"
            color="primary"
            rounded="lg"
            size="x-large"
            :disabled="!email"
            @click="loginWithUser"
            >Login</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-form>
  <v-row justify="center" v-if="!showLogin">
    <v-col cols="6">
      <div
        class="d-flex justify-space-around align-center flex-column"
      >
        <v-btn variant="plain" theme="none" color="none" class="text-decoration-underline" @click="toggleLogin">
          Already a user, Login
        </v-btn>
      </div>
    </v-col>
  </v-row>
  <v-row justify="center" v-if="showLogin">
    <v-col cols="6">
      <div
        class="d-flex justify-space-around align-center flex-column flex-md-row fill-height"
      >
        <v-btn variant="plain" theme="none" color="none" class="text-decoration-underline" @click="toggleLogin">
          Need to Regsiter
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "LoginForm",
  emits: ['toggleLogin', 'loginWithUser', 'registration', 'update:email', 'update:name'],
  props: {
    label: {
      type: String,
      default: "",
    },
    valid: {
      type: Boolean,
      default: false,
    },
    showLogin: {
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
  methods: {
    loginWithUser() {
        this.$emit('loginWithUser')
    },
    toggleLogin() {
        this.$emit('toggleLogin')
    }
  }
};
</script>

<style></style>
