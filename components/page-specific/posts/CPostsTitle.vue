<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: false,
  }
});
</script>

<template>
  <div class="py-30px text-center">
    <p class="font-notosansjp text-40px font-600 text-transparent bg-clip-text bg-gradient-to-b from-gray-6 to-gray-8 line-height-snug">{{ title }}</p>
    <p class="font-inter text-16px font-500 text-gray-7">{{ date }}</p>
  </div>
</template>

<style scoped>

</style>