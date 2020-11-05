<template>
  <base-card class="baseCard">
    <div class="container">
      <div class="row red">
        <div class="col-4">
          <div class="row">
            <div class="col-2">
              <fa-icon class="icon" :icon="['fas', 'info']" />
            </div>
            <div class="col-10">
              <h5 class="naslov">Porezno savjetovanje</h5>
              <p>
                Uz računovodstvene usluge, pružamo i porezno savjetovanje u
                svrhu unaprjeđenja Vašeg poslovanja. Pouzadnost, ažurnost,
                preciznost i konstantno usavršavanje naši su aduti.
              </p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-2">
              <fa-icon class="icon" :icon="['fas', 'balance-scale-left']" />
            </div>
            <div class="col-10">
              <h5 class="naslov">Obračun plaća</h5>
              <p>
                Pružamo potpunu knjigovodstvenu uslugu za Vaše poduzeće. Od
                vođenja poslovovnih knjiga, obračuna plaća do ispunjavanja i
                predaje popratnih obrazaca.
              </p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-2">
              <fa-icon class="icon" :icon="['fas', 'book']" />
            </div>
            <div class="col-10">
              <h5 class="naslov">Knjigovodstvo za obrtnike</h5>
              <p>
                Obrtnik ste? Tražite pouzdanog partnera koji će rješavati sve
                Vaše knjigovodstvene zadatke? Na pravom ste mjestu! Obratite nam
                se s povjerenjem!
              </p>
            </div>
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
img {
  width: 50px;
  height: auto;
}

.baseCard {
  max-width: 1000px;
}

.icon {
  width: 100%;
  height: auto;
  max-height: 45px;
  justify-self: center;
  color: var(--navy);
  padding-top: 3px;
}

.col-4 {
  padding-left: -3px;
}

.col-2 {
  padding: 0;
}
</style>
