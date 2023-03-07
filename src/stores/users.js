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
    };
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
        
      }
    },
  },
});
