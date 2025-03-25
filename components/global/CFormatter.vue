<script setup lang="ts">

</script>

<template>
  <div class="font-ja">
    <slot />
  </div>
</template>

<style scoped>
::v-slotted(section) {
  @apply my-14px;
}

::v-slotted(p) {
  @apply font-500 text-gray-7;
}

::v-slotted(b) {
  @apply font-700 text-gray-7;
}

::v-slotted(ul) {
  @apply pl-18px;
}

::v-slotted(li) {
  @apply list-disc;
}

::v-slotted(h1) {
  @apply text-30px font-600 text-gray-8 text-transparent bg-clip-text bg-gradient-to-b from-gray-6 to-gray-9;
}
</style>