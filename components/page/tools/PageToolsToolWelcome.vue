<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<template>
  <div class="welcome">
    <p>{{ title }}</p>
  </div>
</template>

<style scoped lang="scss">
.welcome {
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 40px;
    font-weight: 700;
  }
}
</style>