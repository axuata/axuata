<script setup lang="ts">
const props = defineProps({
  link: {
    type: String,
    required: false,
  },
  emoji: {
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
  date: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <NuxtLink :to="link" class="">
    <div class="flex justify-center items-center my-10px transition-all duration-200 hover:scale-105">
      <div class="bg-white size-80px flex justify-center items-center rounded-10px">
        <Twemoji :emoji="emoji || ''" size="40px" class="" />
      </div>
      <div class="ml-8px">
        <div>
          <p class="font-notosansjp text-20px font-600 text-gray-7">{{ title }}</p>
        </div>
        <div class="w-380px">
          <p class="text-14px text-gray-5 font-500">
            <span class="font-notosansjp">{{ description }}</span>
            -
            <span class="font-inter">{{ date }}</span>
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>