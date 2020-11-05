<template>
  <base-card>
    <div class="container-fluid">
      <div class="row" id="prvi">
        <div class="col-custom ikona">
          <fa-icon class="icon" :icon="['fas', 'history']" />
        </div>
        <div class="col-customm tekst">
          <p>Dugi niz godina pružamo računovodstvene usluge namijenjene:</p>
        </div>
      </div>
      <div class="row" id="drugi">
        <div class="col">
          <div class="row">
            <div class="col-4 ikona">
              <fa-icon class="icon" :icon="['fas', 'building']" />
            </div>
            <div class="col-8 tekst"><p>trgovačkim društvima</p></div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col-4 ikona">
              <fa-icon class="icon" :icon="['fas', 'tools']" />
            </div>
            <div class="col-8 tekst"><p>obrtnicima</p></div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col-4 ikona">
              <fa-icon class="icon" :icon="['fas', 'users']" />
            </div>
            <div class="col-8 tekst"><p>udrugama</p></div>
          </div>
        </div>
      </div>
    </div>
  </base-card>
</template>
<script>
import BaseCard from "./BaseCard.vue";
export default {
  components: {
    BaseCard,
  },
};
</script>

<style scoped>
.row {
  align-items: start;
  padding-top: 4px;
}

.container-fluid {
  max-height: 200px;
}

.col-custom {
  width: 11.1%;
}

.col-customm {
  width: 88.9%;
}

.icon {
  width: 90%;
  height: auto;
  max-height: 45px;
  justify-self: center;
  color: var(--navy);
}

.ikona {
  padding: 5px;
}

.tekst {
  padding-left: 9px;
}

p {
  min-width: 100px;
  min-height: 50px;
  font-size: 1.05rem;
  font-family: "Roboto", sans-serif;
  color: var(--gray);
  font-weight: 550;
}
</style>
