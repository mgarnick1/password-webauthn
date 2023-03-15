<template>
  <div v-if="quote?.quote">
    <h2>{{ quote.quote }}</h2>
    <h3>{{ quote.author }}</h3>
  </div>
</template>

<script>
export default {
  name: "Quote",
  props: {
    quote: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
