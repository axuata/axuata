<script setup lang="ts">

</script>

<template>
  <div class="flex">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.flex {
  justify-content: space-around;
  display: flex;
  margin: 10px auto;
}

@media (max-width: 1200px) {
  .flex {
    display: block;
  }
}
</style>