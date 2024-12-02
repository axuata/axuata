<script setup lang="ts">
let welcomeMessage = ref<string>('');

onMounted(() => {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      welcomeMessage.value = 'Welcome!';
      break;
    case 1:
      welcomeMessage.value = 'Hello!';
      break;
    case 2:
      welcomeMessage.value = 'Hi there!';
      break;
  }
});
</script>

<template>
  <div class="p-30px text-center">
    <p class="text-50px color-gray-9 font-600 font-inter">{{ welcomeMessage }}</p>
  </div>
</template>

<style scoped>

</style>