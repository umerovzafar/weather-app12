<template>
  <section class="main__current container">
    <div class="main__current-item">
      <h2 class="main__current-item-temp">{{ Math.round(current.temp) }}°</h2>
      <p class="main__current-item-day">Сегодня</p>
      <p class="main__current-item-time">Время: {{ timeFormat() }}</p>
      <p class="main__current-item-city">Город: {{ cityName }}</p>
    </div>
    <div class="main__current-item">
      <div class="main__current-item-data">
        <div class="main__current-item-data-icon"></div>
        <p>Температура</p>
        <span>
          {{ Math.round(current.temp) }}° - ощущается как
          {{ Math.round(current.feels_like) }}°
        </span>
      </div>
      <div class="main__current-item-data">
        <div class="main__current-item-data-icon"></div>
        <p>Давление</p>
        <span>{{ current.pressure }} мм ртутного столба - нормальное</span>
      </div>
      <div class="main__current-item-data">
        <div class="main__current-item-data-icon"></div>
        <p>Осадки</p>
        <span>{{ current.weather[0].description }}</span>
      </div>
      <div class="main__current-item-data">
        <div class="main__current-item-data-icon"></div>
        <p>Ветер</p>
        <span
          >{{ current.wind_speed }} м/с {{ setWindDirection() }} -
          {{ windSpeedStatus }}</span
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  current: Object,
  cityName: String,
});

const timeFormat = () => {
  const millisecods = props.current.dt * 1000;
  const nowTime = new Date(millisecods);
  const res = `${nowTime.toLocaleDateString("ru-Ru", {
    hour: "numeric",
  })} ${nowTime.toLocaleDateString("ru-Ru", { minute: "2-digit" })}`.split(" ");
  console.log(res);
  return `${res[1]}:${res[3]}`;
};
// 

const setWindDirection = () => {
  const res =
    props.current?.wind_deg == 0 || props.current?.wind_deg == 360
      ? "Северный"
      : props.current?.wind_deg > 0 && props.current?.wind_deg < 90
      ? "Северо-Восточный"
      : props.current?.wind_deg == 90
      ? "Восточный"
      : props.current?.wind_deg > 90 && props.current?.wind_deg < 180
      ? "Юго-Восточный"
      : props.current?.wind_deg == 180
      ? "Южный"
      : props.current?.wind_deg > 180 && props.current?.wind_deg < 270
      ? "Юго-Западный"
      : props.current?.wind_deg == 270
      ? "Западный"
      : props.current?.wind_deg > 270 && props.current?.wind_deg < 360
      ? "Северо-Западный"
      : "";

  return res;
};

const windSpeedStatus = computed(() => {
  const speed = Math.round(props.current.wind_speed);
  const status =
    speed < 1
      ? "Штиль"
      : speed >= 1 && speed <= 5
      ? "Лёгкий ветер"
      : speed >= 6 && speed <= 11
      ? "Слабый ветер"
      : speed >= 12 && speed <= 19
      ? "Умеренный ветер"
      : speed >= 20 && speed <= 28
      ? "Свежий ветер"
      : speed >= 29 && speed <= 38
      ? "Сильный ветер"
      : speed >= 39 && speed <= 49
      ? "Крепкий ветер"
      : speed >= 50 && speed <= 61
      ? "Шторм"
      : speed >= 62 && speed <= 74
      ? "Шторм"
      : speed >= 75
      ? "Ураган"
      : "Error";
  return status;
});
</script>
