<template>
  <naslovna-banner></naslovna-banner>
  <naslovna-usluge></naslovna-usluge>
  <the-carousel></the-carousel>
</template>

<script>
import TheCarousel from "../components/ui/TheCarousel.vue";
import NaslovnaBanner from "../components/ui/NaslovnaBanner.vue";
import NaslovnaUsluge from "../components/ui/NaslovnaUsluge.vue";
export default {
  components: {
    TheCarousel,
    NaslovnaBanner,
    NaslovnaUsluge,
  },
};
</script>

<style scoped></style>
