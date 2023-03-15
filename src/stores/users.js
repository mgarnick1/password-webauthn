import { defineStore } from "pinia";
import userApi from "../api/index";
import {
  base64ToArrayBuffer,
  encodeCredentialInfoRequest,
} from "../utils/utils";
import { decode } from "base64-arraybuffer";

export const userStore = defineStore("users", {
  state: () => {
    return {
      user: {},
      showLogin: false,
      token: "",
    };
  },
  persist: {
    enabled: true,
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  actions: {
    fetchUser() {
      this.user = { id: 1, name: "Mark" };
    },
    async register(email, name) {
      const response = await userApi.post("users/add", {
        name,
        email,
      });
      if (response.data && response.data?.challenge && response.data?.user) {
        const challenge = response.data;
        const challengeArrayBuffer = decode(challenge.challenge);
        challenge.challenge = challengeArrayBuffer;
        challenge.user.id = decode(challenge.user.id);
        const credential = await navigator.credentials.create({
          publicKey: challenge,
        });
        const encodeCredential = encodeCredentialInfoRequest(credential);
        await this.finishRegistration(encodeCredential);
      }
    },
    async finishRegistration(encodedCredential) {
      const response = await userApi
        .post("users/register", encodedCredential)
        .catch((err) => {
          console.log(err);
        });
      if (response.data && response.data.registered) {
        this.showLogin = true;
      }
      return response;
    },
    toggleLoginAction() {
      this.showLogin = !this.showLogin;
    },
    async loginUser(email) {
      let response = {};
      try {
        response = await userApi.post("users/login", { email });
        if (response.data) {
          const challenge = response.data;
          challenge.challenge = decode(challenge.challenge);
          challenge.allowCredentials = challenge.allowCredentials.map(
            (cred) => ({
              ...cred,
              id: decode(cred.id),
            })
          );
          const credential = await navigator.credentials.get({
            publicKey: challenge,
          });
          const encodeCredential = encodeCredentialInfoRequest(credential);
          await this.loginVerify(encodeCredential);
        }
      } catch (e) {
        console.log(e);
      } finally {
        return response.data;
      }
    },
    async loginVerify(credentials) {
      try {
        const response = await userApi.post("users/verify", credentials);
        if (response.data) {
          this.user = response.data.user;
        }
      } catch (e) {}
    },
    async logoutUserAction() {
      try {
        const response = await userApi.post("users/logout", {});
        if (response.data) {
          this.user = null;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
});
