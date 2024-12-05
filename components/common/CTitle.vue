<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  font: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="p-30px text-center">
    <p class="text-50px color-gray-9 font-600" :class="`font-${font}`">{{ title }}</p>
  </div>
</template>

<style scoped>

</style>