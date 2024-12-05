<script setup lang="ts">

</script>

<template>
  <div class="max-w-1200px mx-auto post">
    <slot />
  </div>
</template>

<style scoped>
.post {
  font-family: "Noto Sans JP", serif;
}

.post ::v-slotted(p) {
  font-size: 16px;
  font-weight: 400;
  color: #191919;
}

.post ::v-slotted(b) {
  font-size: 16px;
  font-weight: 500;
  color: #191919;
}

.post ::v-slotted(small) {
  font-size: 13px;
  font-weight: 400;
  color: #323232;
}

.post ::v-slotted(h1) {
  font-size: 32px;
  font-weight: 600;
  color: #191919;
}
</style>