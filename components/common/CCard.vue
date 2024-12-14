<script setup lang="ts">
const props = defineProps({
  logo: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <a :href="link" class="block bg-white b-solid b-1px p-10px rounded-10px w-460px m-5px hover:bg-gray-1 transition duration-100">
    <div class="flex items-center h-30px">
      <img :src="logo" :alt="logo" class="size-5 bg-white rounded-10px">
      <p class="font-inter ml-5px font-600 color-gray-8">{{ title }}</p>
    </div>
    <div class="flex items-center h-30px">
      <p class="font-inter text-4">{{ description }}</p>
    </div>
  </a>
</template>

<style scoped>

</style>