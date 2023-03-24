import { defineStore } from "pinia";
import api from "../api/index";

export const quoteStore = defineStore("quotes", {
  state: () => {
    return {
      quote: {},
    };
  },
  actions: {
    async getQuotesAction() {
      const response = await api.get("quote").catch((e) => {
        console.log(e.message);
      });
      if (response?.data?.quote) {
        this.quote = response.data.quote;
      }
    },
  },
});
