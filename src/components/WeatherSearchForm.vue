<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ["search-weather"],
  setup(_, { emit }) {
    const city = ref<string>("");

    const searchWeather = (event: Event) => {
      event.preventDefault();
      emit("search-weather", city.value);
    };

    return {
      city,
      searchWeather,
    };
  },
});
</script>

<template>
  <section class="d-flex justify-content-center mt-4">
    <form
      @submit.prevent="searchWeather"
      class="form-inline p-3 bg-light bg-opacity-10 rounded shadow-sm border border-light"
    >
      <div class="form-group flex-grow-1">
        <input
          id="city"
          v-model="city"
          placeholder="ex: Bordeaux"
          class="form-control w-100"
          required
          aria-label="Entrez une ville"
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary ml-2 rounded-pill w-100 mt-3"
        aria-label="Rechercher"
      >
        Rechercher
      </button>
    </form>
  </section>
</template>
