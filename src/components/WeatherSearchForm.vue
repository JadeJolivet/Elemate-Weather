<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ['search-weather'],
  setup(_, { emit }) {
    const city = ref<string>("");

    const searchWeather = (event: Event) => {
      event.preventDefault();
      emit('search-weather', city.value);
    };

    return {
      city,
      searchWeather,
    };
  },
});
</script>

<template>
  <section class="d-flex justify-content-center">
    <form @submit.prevent="searchWeather" class="form-inline">
      <fieldset>
        <input
          id="city"
          v-model="city"
          placeholder="ex: Bordeaux"
          class="form-control w-100"
          required
          aria-label="Entrez une ville"
        />
      </fieldset>
      <button
        type="submit"
        class="btn btn-primary ml-2"
        aria-label="Rechercher"
      >
        Rechercher
      </button>
    </form>
  </section>
</template>

<style scoped>
button.btn-primary {
  border-radius: 1rem;
  background-color: #415bfe;
  width: 100%;
  padding: 0.5rem;
}
</style>
