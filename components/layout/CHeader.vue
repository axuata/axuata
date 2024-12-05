<script setup lang="ts">

</script>

<template>
  <div>
    <div class="flex justify-between items-center mx-auto max-w-1300px h-60px">
      <div>
        <NuxtImg src="/images/logos/axuata/banner/banner.svg" alt="Axuata's Banner" class="h-50px" />
      </div>
      <div class="flex">
        <div class="flex mr-10px *:mx-6px">
          <CHeaderNuxtLink text="Home" to="/" />
          <CHeaderNuxtLink text="Posts" to="/posts/" />
          <CHeaderNuxtLink text="Tools" to="/tools/" />
        </div>
        <div class="flex *:mx-3px">
          <CHeaderSocial icon-src="/images/icons/brand/github/github.svg" href="https://github.com/axuata" />
          <CHeaderSocial icon-src="/images/icons/brand/discord/discord.svg" href="https://discord.gg/S9NTNyQKeq" />
          <CHeaderSocial icon-src="/images/icons/brand/x-is-twitter/x-black.png" href="https://x.com/axuata_x" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>