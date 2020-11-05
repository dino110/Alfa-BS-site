<template>
  <header class="sticky-top navbar-light bg-light">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/naslovna">
        <img src="../../assets/AlfaBS_logo2.png" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/naslovna">Naslovna</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ponuda">Ponuda</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/kontakt">Kontakt</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  z-index: 100;
  opacity: 0.98;
}

a:active,
a:hover,
a.router-link-active {
  font-weight: 650;
}

img {
  width: 150px;
  height: 15%;
}

nav {
  width: 100%;
  padding: 0 10%;
}

li {
  margin: 0 0.1rem;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.5rem 0.2rem;
}
</style>
