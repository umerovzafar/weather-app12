<template>
  <header class="header">
    <nav class="header__nav container">
      <a href="" class="header__nav-logo">
        <img src="../../assets/images/logo.svg" alt="LOGO" />
        <span>VUE-WEATHER {{ mode }}</span>
      </a>
      <div class="header__nav-search">
        <button @click="isDarkMode">
          <img src="../../assets/images/theme.svg" alt="theme" />
        </button>
        <input
          @keypress.enter="setCity"
          type="text"
          placeholder="Выбрать город"
          v-model="cityController"
        />
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useWeather } from "../../store/weather_store.js";
const weatherStore = useWeather();
const cityController = ref("");

const setCity = async () => {
  try {
    await weatherStore.getWeatherData(cityController.value);
    cityController.value = "";
  } catch (error) {
    error;
  }
};
</script>
