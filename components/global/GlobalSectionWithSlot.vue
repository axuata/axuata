<script setup lang="ts">
const props = defineProps({
  titleText: String,
})
</script>

<template>
  <p class="title">{{ titleText }}</p>
  <slot></slot>
</template>

<style scoped lang="scss">
.title {
  font-size: 32px;
  font-weight: 600;
  text-align: center;
}
</style>