<script setup lang="ts">

</script>

<template>
  <div class="flex items-center justify-center w-full">
    <div class="flex items-center justify-between max-w-1200px w-full h-60px">
      <NuxtLink to="/" class="flex items-center justify-center">
        <img src="/images/icons/banner/banner.png" alt="/images/icons/banner/banner.png" class="h-55px" />
      </NuxtLink>
      <div class="font-inter flex items-center justify-center *:mx-3px">
        <NuxtLink to="/" class="transition-all duration-200 hover:font-500">Home</NuxtLink>
        <NuxtLink to="/posts/" class="transition-all duration-200 hover:font-500">Posts</NuxtLink>
        <NuxtLink to="/projects/" class="transition-all duration-200 hover:font-500">Projects</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>