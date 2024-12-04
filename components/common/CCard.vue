<script setup lang="ts">
const props = defineProps({
  logo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a :href="link" class="block bg-white b-solid b-1px p-10px rounded-10px w-auto max-w-460px my-7px mx-5px hover:bg-gray-1 transition duration-100">
    <div class="flex items-center h-30px">
      <img :src="logo" :alt="logo" class="size-24px bg-white rounded-10px">
      <p class="font-inter ml-5px font-600 color-gray-8">{{ title }}</p>
    </div>
    <div class="flex items-center h-30px">
      <p class="font-inter text-15px">{{ description }}</p>
    </div>
  </a>
</template>

<style scoped>

</style>