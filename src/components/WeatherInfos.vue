<script lang="ts">
import { defineComponent } from "vue";
import { Weather } from "../models/Weather";

export default defineComponent({
  props: {
    weather: {
      type: Object as () => Weather,
      required: true,
    },
  },
});
</script>

<template>
  <section class="card weather-card">
    <figure>
      <img
        :src="weather.icon"
        class="card-img-top weather-icon img-fluid"
        :alt="'Icone de météo pour ' + weather.description"
      />
      <figcaption class="sr-only">{{ weather.description }}</figcaption>
    </figure>
    <article class="card-body">
      <h2 class="card-title">{{ weather.city }}</h2>
      <p class="card-text">
        Température : {{ weather.temperature }}°C<br />
        Description : {{ weather.description }}<br />
        <a :href="weather.moreInfoUrl" target="_blank" rel="noopener noreferrer"
          >Plus d'infos</a
        >
      </p>
    </article>
  </section>
</template>

<style scoped>
.weather-card {
  width: 100%;
  margin: 1rem auto;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.card-body {
  text-align: center;
}
</style>
