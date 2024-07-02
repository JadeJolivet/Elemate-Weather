<script lang="ts">
import { defineComponent, ref } from "vue";
import WeatherInfos from "./components/WeatherInfos.vue";
import WeatherSearchForm from "./components/WeatherSearchForm.vue";
import { getWeather } from "./services/weatherService";
import { Weather } from "./models/Weather";

export default defineComponent({
  components: {
    WeatherInfos,
    WeatherSearchForm,
  },
  setup() {
    const city = ref<string>("");
    const weather = ref<Weather | null>(null);
    const error = ref<string | null>(null);

    const searchWeather = async (cityName: string) => {
      try {
        if (cityName) {
          error.value = null;
          weather.value = await getWeather(cityName);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          error.value = err.message;
        } else {
          error.value = "Une erreur s'est produite";
        }
        weather.value = null;
      }
    };

    return {
      city,
      weather,
      error,
      searchWeather,
    };
  },
});
</script>

<template>
  <section
    class="d-flex align-items-center justify-content-center vh-100 bg-image"
  >
    <main
      class="container p-4 bg-light bg-opacity-10 rounded shadow-sm border border-light bg-blur m-4"
    >
      <header class="text-center mb-4">
        <h1
          class="display-4 text-primary text-white"
          style="text-shadow: 2px 2px 4px rgba(2, 1, 49, 0.3)"
        >
          Recherche Météo 🌤️
        </h1>
      </header>

      <WeatherSearchForm @search-weather="searchWeather" />

      <section aria-live="polite">
        <WeatherInfos v-if="weather" :weather="weather" />
        <article
          v-if="error"
          class="alert alert-danger mt-3 text-center"
          role="alert"
        >
          {{ error }}
        </article>
      </section>
    </main>
  </section>
</template>

<style scoped>
.bg-image {
  background-image: url("./assets/sky2.png");
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(0.1rem);
  font-family: "Poppins", sans-serif;
  height: 100%;
  width: 100%;
}

.bg-blur {
  backdrop-filter: blur(1rem);
}
</style>
