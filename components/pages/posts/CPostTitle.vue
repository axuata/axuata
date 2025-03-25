<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="text-center py-26px">
    <p class="font-ja font-600 text-40px text-transparent bg-clip-text bg-gradient-to-b from-gray-6 to-gray-9 line-height-tight">{{ title }}</p>
    <p class="font-ja font-600 text-16px text-transparent bg-clip-text bg-gradient-to-b from-gray-5 to-gray-6">{{ desc }}</p>
  </div>
</template>

<style scoped>

</style>