<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  titleAlign: {
    type: String,
    required: true,
  },
  titleFont: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="max-w-1300px mx-auto px-10px mb-42px">
    <p class="font-inter color-gray-8 font-600 text-30px" :class="`text-${titleAlign} font-${titleFont}`">{{ title }}</p>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>