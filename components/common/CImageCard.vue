<script setup lang="ts">
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink :to="link" class="z-100 hover:scale-103 transition-transform duration-200">
    <NuxtImg :src="imageSrc" :alt="imageSrc" class="w-320px rounded-20px" />
    <div class="p-4px">
      <p class="font-notosansjp text-24px text-center font-600 color-gray-8">{{ title }}</p>
      <p class="font-inter text-14px text-center font-500 color-gray-7">{{ date }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>