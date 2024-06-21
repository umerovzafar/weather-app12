<template>
  <section class="main__daily container">
    <MainDailyWeatherDataItem
      v-for="(day, index) in dailyData"
      :key="index"
      :day="day"
      :index="index"
    />
  </section>
</template>

<script setup>
import MainDailyWeatherDataItem from "./MainDailyWeatherDataItem.vue";
import { computed } from "vue";
const props = defineProps({
  daily: Array,
});

const dailyData = computed(() => {
  return props.daily.splice(0, 7);
});
</script>
