<script setup lang="ts">
const props = defineProps({
  label: {
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
  <NuxtLink :to="href" class="font-inter">
    {{ label }}
  </NuxtLink>
</template>

<style scoped>

</style>