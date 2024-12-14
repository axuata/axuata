<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: false
  }
});
</script>

<template>
  <div class="flex justify-center items-center px-10px mx-auto max-w-1300px w-full">
    <div class="flex w-full h-1px bg-gray-3" />
    <p class="font-inter mx-10px text-gray-5 text-14px">{{ text }}</p>
    <div class="flex w-full h-1px bg-gray-3" />
  </div>
</template>

<style scoped>

</style>