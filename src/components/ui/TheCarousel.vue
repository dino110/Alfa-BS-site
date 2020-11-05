<template>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active vod">
        <img
          src="../../assets/vod-logo-1.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item ">
        <img
          src="../../assets/logo-sve-za-zube.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleControls"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only"></span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleControls"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only"></span>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel {
  height: 200px;
  max-width: 400px;
  margin: auto;
}

.vod {
  padding-top: 40px;
}
</style>
