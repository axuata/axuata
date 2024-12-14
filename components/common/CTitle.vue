<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  }
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-200px text-center">
    <p class="font-inter font-600 text-50px text-transparent bg-clip-text bg-gradient-to-b from-gray-6 to-gray-9">{{ title }}</p>
    <p class="font-notosansjp font-500 text-gray-5 text-18px">{{ description }}</p>
  </div>
</template>

<style scoped>

</style>