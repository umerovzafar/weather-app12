<template>
  <div class="loader">
    <div class="loader__item"></div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  &__item {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid rgba(208, 202, 202, 0.785);
    border-top: 1px solid var(--blueColor);
    animation: loader 2s infinite linear;
  }
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>