<script setup lang="ts">

</script>

<template>
  <div class="max-w-1100px mx-auto">
    <slot />
  </div>
</template>

<style scoped>
::v-slotted(*) {
  font-family: 'notosansjp', system-ui;
}

::v-slotted(h1) {
  font-size: 36px;
  font-weight: 600;
  color: #333333;
}

::v-slotted(p) {
  font-weight: 500;
  color: #434343;
  line-height: 1.6;
}

::v-slotted(a) {
  color: #0000FF;
  text-decoration: underline;
}
</style>