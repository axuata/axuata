<script setup lang="ts">

</script>

<template>
  <div class="font-ja">
    <slot />
  </div>
</template>

<style scoped>
::v-slotted(h1) {
  @apply text-30px font-600 text-gray-8 text-transparent bg-clip-text bg-gradient-to-b from-gray-6 to-gray-9;
}

::v-slotted(h2) {
  @apply text-26px font-600 text-gray-8 text-transparent bg-clip-text bg-gradient-to-b from-gray-6 to-gray-9;
}

::v-slotted(h3) {
  @apply text-22px font-600 text-gray-8 text-transparent bg-clip-text bg-gradient-to-b from-gray-6 to-gray-9;
}

::v-slotted(section) {
  @apply my-14px;
}

::v-slotted(p) {
  @apply font-500 text-gray-7;
}

::v-slotted(b) {
  @apply font-700;
}

::v-slotted(a) {
  @apply font-500 text-blue-6 decoration-blue-6 decoration-dashed;
}

::v-slotted(code) {
  font-family: "JetBrains Mono", "system-ui";
  @apply bg-gray-1 b-solid b-gray-2 b-1px px-4px py-4px rounded-8px;
}

::v-slotted(ul) {
  @apply pl-18px;
}

::v-slotted(li) {
  @apply list-disc text-gray-8 marker:text-gray-4;
}

::v-slotted(blockquote) {
  @apply flex gap-2px my-5px bg-gray-2 b-dashed b-gray-3 b-1px font-500 text-gray-6 px-16px rounded-10px py-16px;
}
</style>