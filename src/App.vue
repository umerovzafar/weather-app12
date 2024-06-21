<template>
  <div class="wrapper" v-if="weatherStore?.weatherData">
    <NavBar />
    <Main
      :weatherData="weatherStore?.weatherData"
    />

  </div>
  <Loader v-else />
</template>

<script setup>
import NavBar from "./components/NavBar/NavBar.vue";
import Main from "./components/WeatherData/Main.vue";
import Loader from "./components/Loader.vue";

import { useWeather } from "./store/weather_store.js";
import { onMounted } from "vue";
const weatherStore = useWeather();
onMounted(() => {
  setTimeout(() => {
    weatherStore.getWeatherData();
  }, 2000);
});

</script>

