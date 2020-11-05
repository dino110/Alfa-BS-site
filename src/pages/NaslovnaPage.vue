<template>
  <naslovna-banner></naslovna-banner>
  <the-carousel></the-carousel>
</template>

<script>
import TheCarousel from "../components/ui/TheCarousel.vue";
import NaslovnaBanner from "../components/ui/NaslovnaBanner.vue";
export default {
  components: {
    TheCarousel,
    NaslovnaBanner,
  },
};
</script>

<style scoped></style>
