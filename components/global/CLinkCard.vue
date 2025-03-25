<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    required: false,
  },
  emoji: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <template v-if="href">
    <NuxtLink :to="href" class="h-100px w-fit flex justify-center items-center !no-underline hover:scale-105 duration-200 transition-all">
      <div class="bg-gray-2 size-70px flex items-center justify-center rounded-18px">
        <Twemoji :emoji="emoji" size="30" />
      </div>
      <div class="ml-8px">
        <p class="font-ja text-20px font-600 color-gray-8">{{ title }}</p>
        <p class="font-ja text-14px font-500 color-gray-6">{{ desc }}</p>
      </div>
    </NuxtLink>
  </template>
  <template v-else>
    <div class="h-100px flex justify-center items-center">
      <div class="bg-gray-2 size-70px flex items-center justify-center rounded-18px">
        <Twemoji :emoji="emoji" size="30" />
      </div>
      <div class="ml-8px">
        <p class="font-ja text-20px font-600 color-gray-8">{{ title }}</p>
        <p class="font-ja text-14px font-500 color-gray-6">{{ desc }}</p>
      </div>
    </div>
  </template>
</template>

<style scoped>

</style>