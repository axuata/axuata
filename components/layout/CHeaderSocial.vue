<script setup lang="ts">
const props = defineProps({
  iconSrc: String,
  href: String,
});
</script>

<template>
  <a :href="href" class="flex justify-center items-center size-28px bg-white b-solid b-1px b-gray-2 rounded-6px hover:b-gray-4 transition duration-100">
    <NuxtImg :src="iconSrc" :alt="iconSrc" class="size-16px" />
  </a>
</template>

<style scoped>

</style>