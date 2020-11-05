<template>
  <footer>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3" id="adress">
          <p>Alfa-BS d.o.o.</p>
          <p>Rusanova 19, 10000 Zagreb</p>
          <p>Tel: +385 1 2302 855 | +385 1 2301 810 |</p>
          <p>Fax: +385 1 2331 485</p>
          <p>e-mail:<a href="mailto:info@alfa-bs.hr">info@alfa-bs.hr</a></p>
        </div>
        <div class="col-md-3" id="data">
          <p>OIB: 53225482397</p>
          <p>MB: 03930467</p>
          <p>Trgovački sud u Zagrebu</p>
          <p>Direktor:</p>
        </div>
        <div class="col-md-3" id="datatwo">
          <p>Temeljni kapital</p>
          <p>HR1234567891012</p>
          <p>IME BANKE</p>
          <p>BANKA d.d. Dubrava</p>
        </div>
        <div class="col-md-3">
          <nav>
            <ul>
              <li>
                <router-link to="/blog">Blog</router-link>
              </li>
              <li>
                <router-link to="/kontakt">Kontakt</router-link>
              </li>
              <li>
                <router-link to="/naslovna">Naslovna</router-link>
              </li>
              <li>
                <router-link to="/ponuda">Ponuda</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  width: 100%;
  color: #aaa;
  min-height: 10rem;
  background-color: #515157;
  margin-top: 1%;
  padding: 1% 0;
}

footer a {
  text-decoration: none;
  padding: 0 0.3rem;
  color: #aaa;
}

.container-fluid {
  width: 100%;
  padding: 0 10%;
}

.row {
  align-items: flex-start;
}

a:active,
a:hover,
a.router-link-active {
  font-weight: 600;
  color: white;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 1.1rem;
  font-weight: 380;
  margin: 0.15rem;
}

p {
  margin: 1px;
  font-size: 0.95rem;
  font-family: "Roboto", sans-serif;
}
</style>
