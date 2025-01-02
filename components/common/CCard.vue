<script setup lang="ts">
const props = defineProps({
  imageSrc: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  }
});
</script>

<template>
  <NuxtLink :to="link" class="m-10px transform transition duration-200 hover:scale-105">
    <div>
      <img :src="imageSrc" :alt="imageSrc" class="w-300px h-170px rounded-20px" />
    </div>
    <div class="text-center mt-3px">
      <p class="font-notosansjp text-24px text-gray-7 font-600">{{ title }}</p>
      <p class="font-inter text-14px text-gray-6 font-500">{{ date }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>