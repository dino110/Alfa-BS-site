<template>
  <the-header></the-header>
  <div class="page">
    <router-view></router-view>
  </div>
  <the-footer></the-footer>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

:root {
  --navy: #112f41;
  --navy-light: #103a52;
  --some-blue: #00809d;
  --teal: #068587;
  --gray: #515157;
  --main-bg-color: coral;
  --yelow: #f2b134;
}

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

.page {
  position: relative;
}
</style>
