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
  <div class="text-center py-30px">
    <p class="font-inter text-50px font-600 text-transparent bg-clip-text bg-gradient-to-b from-gray-6 to-gray-9 line-height-snug">{{ title }}</p>
    <p class="font-notosansjp font-500 text-gray-6">{{ description }}</p>
  </div>
</template>

<style scoped>

</style>