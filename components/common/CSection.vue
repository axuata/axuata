<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  headerAlign: {
    type: String,
    required: false,
  },
  titleFont: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="mt-10px mb-20px max-w-1300px mx-auto">
    <div :class="`text-${headerAlign}`">
      <p class="text-32px font-600 text-transparent bg-clip-text bg-gradient-to-b from-gray-5 to-gray-9 line-height-none" :class="`font-${titleFont}`">{{ title }}</p>
      <p class="font-notosansjp font-500 text-gray-6 text-14px mt-5px">{{ description }}</p>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>