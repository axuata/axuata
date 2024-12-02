<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  titleAlign: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="max-w-1300px mx-auto mb-42px">
    <p class="font-inter text-30px color-gray-8 font-600" :class="`text-${titleAlign}`">{{ title }}</p>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>