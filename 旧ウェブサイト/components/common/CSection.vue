<script setup lang="ts">
const props = defineProps<{
  title: string;
  titleAlign: string;
}>();
</script>

<template>
  <div class="my-35px">
    <p v-if="titleAlign === 'left'" class="font-en text-left text-35px font-600 text-transparent bg-clip-text bg-gradient-to-b from-gray-6 to-gray-9 line-height-tight">{{ title }}</p>
    <p v-else-if="titleAlign === 'center'" class="font-en text-center text-35px font-600 text-transparent bg-clip-text bg-gradient-to-b from-gray-6 to-gray-9 line-height-tight">{{ title }}</p>
    <p v-else class="font-en text-right text-35px font-600 text-transparent bg-clip-text bg-gradient-to-b from-gray-6 to-gray-9 line-height-tight">{{ title }}</p>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>