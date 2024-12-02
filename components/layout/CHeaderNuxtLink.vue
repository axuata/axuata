<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <NuxtLink :to="to" class="font-inter text-gray-9">
    {{ text }}
  </NuxtLink>
</template>

<style scoped>

</style>