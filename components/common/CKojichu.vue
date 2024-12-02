<script setup lang="ts">
</script>

<template>
  <div class="flex w-100vw h-full justify-center items-center">
    <p class="kojichu font-notosansjp text-200px font-600">工事中</p>
  </div>
</template>

<style scoped>
@keyframes rainbow-chaos {
  0% {
    color: hsl(0, 100%, 50%);
    transform: rotate(0deg) scale(1);
    font-weight: 100;
    letter-spacing: 0px;
  }
  12% {
    color: hsl(45, 100%, 50%);
    transform: rotate(15deg) scale(1.1);
    font-weight: 300;
    letter-spacing: 2px;
  }
  25% {
    color: hsl(90, 100%, 50%);
    transform: rotate(-20deg) scale(0.9);
    font-weight: 900;
    letter-spacing: -1px;
  }
  37% {
    color: hsl(135, 100%, 50%);
    transform: rotate(10deg) scale(1.3);
    font-weight: 500;
    letter-spacing: 4px;
  }
  50% {
    color: hsl(180, 100%, 50%);
    transform: rotate(-30deg) scale(1.5);
    font-weight: 100; /* 最小太さ */
    letter-spacing: 0px;
  }
  62% {
    color: hsl(225, 100%, 50%);
    transform: rotate(25deg) scale(0.8);
    font-weight: 700;
    letter-spacing: -2px;
  }
  75% {
    color: hsl(270, 100%, 50%);
    transform: rotate(-15deg) scale(1.2);
    font-weight: 400;
    letter-spacing: 3px;
  }
  87% {
    color: hsl(315, 100%, 50%);
    transform: rotate(5deg) scale(1.1);
    font-weight: 900;
    letter-spacing: -1px;
  }
  100% {
    color: hsl(360, 100%, 50%);
    transform: rotate(0deg) scale(1);
    font-weight: 100;
    letter-spacing: 0px;
  }
}

.kojichu {
  animation: rainbow-chaos 0.7s linear infinite;
}
</style>
