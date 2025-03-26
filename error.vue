<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <NuxtLayout>
    <div v-if="error" class="text-center">
      <p class="font-en font-600 text-60px text-transparent bg-clip-text bg-gradient-to-b from-red-5 to-red-6 line-height-tight">{{ error.statusCode }}</p>
      <p class="font-en font-500 text-18px text-transparent bg-clip-text bg-gradient-to-b from-gray-7 to-gray-8 line-height-tight">{{ error.statusMessage }}</p>
      <NuxtLink to="/" class="font-en font-500 text-14px">Go back home</NuxtLink>
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>