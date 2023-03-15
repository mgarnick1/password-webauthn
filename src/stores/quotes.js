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
      const response = await api.get("quote");
      if (response?.data?.quote) {
        this.quote = response.data.quote;
      }
    },
  },
});
