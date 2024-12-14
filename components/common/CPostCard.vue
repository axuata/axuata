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
  href: {
    type: String,
    required: false,
  }
});
</script>

<template>
  <NuxtLink :href="href" class="w-300px text-center hover:scale-103 transition-transform duration-200">
    <div class="w-300px">
      <img :src="imageSrc" :alt="imageSrc" class="w-300px rounded-20px" />
    </div>
    <div>
      <p class="font-notosansjp text-26px font-600 text-gray-7">{{ title }}</p>
      <p class="font-inter font-500 text-gray-6">{{ date }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>