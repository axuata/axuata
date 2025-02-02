<script setup lang="ts">
const props = defineProps({
  link: {
    type: String,
    required: false,
  },
  icon: {
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
});
</script>

<template>
  <a :href="link" class="flex">
    <div class="flex justify-center items-center my-10px transition-all duration-200 hover:scale-105">
      <div class="bg-white size-80px flex justify-center items-center rounded-10px">
        <img :src="icon" :alt="icon" class="size-60px" />
      </div>
      <div class="ml-12px">
        <div>
          <p class="font-inter text-20px font-600 text-gray-7">{{ title }}</p>
        </div>
        <div class="w-350px">
          <p class="text-14px text-gray-5 font-500">
            <span class="font-inter">{{ description }}</span>
          </p>
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>

</style>