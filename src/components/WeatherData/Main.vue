<template>
  <main class="main">
    <MainCurrentWeatherData :current="weatherData.current" :cityName="weatherData?.timezone" />
    <MainDailyWeatherData :daily="weatherData.daily" />
  </main>
</template>

<script setup>
import MainCurrentWeatherData from "./MainCurrentWeatherData.vue";
import MainDailyWeatherData from "./MainDailyWeatherData.vue";

const props = defineProps({
  weatherData: Object,
});
</script>

