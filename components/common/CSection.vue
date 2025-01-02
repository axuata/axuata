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
  <div class="my-12px">
    <div class="text-center">
      <p class="font-inter font-600 text-32px text-transparent bg-clip-text bg-gradient-to-b from-gray-5 to-gray-9 line-height-none">{{ title }}</p>
      <p class="font-notosansjp font-500 text-14px text-gray-6 mt-3px">{{ description }}</p>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>