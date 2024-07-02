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
  <section
    class="container d-flex justify-content-center align-items-center vh-50"
  >
    <article
      class="card weather-card p-4 bg-light bg-opacity-10 rounded shadow-sm border border-light bg-blur mt-4"
    >
      <img
        :src="weather.icon"
        class="card-img-top weather-icon img-fluid mx-auto"
        :alt="'Icone de météo pour ' + weather.description"
        style="width: 72px; height: auto"
      />
      <div class="card-body text-center">
        <h2 class="card-title">{{ weather.city }}</h2>
        <p class="card-text">
          Température : {{ weather.temperature }}°C<br />
          Description : {{ weather.description }}<br />
        </p>
      </div>
    </article>
  </section>
</template>

<style scoped>
.weather-icon {
  width: 3rem;
  height: auto;
}
</style>
