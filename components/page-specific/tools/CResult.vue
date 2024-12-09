<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    required: true,
  }
});
const resultTextElementRef = ref<HTMLParagraphElement | null>(null);

defineExpose({
  resultTextElement: resultTextElementRef,
});
</script>

<template>
  <div v-if="type === 'text'">
    <p ref="resultTextElementRef" class="my-10px font-notosansjp font-500 text-center text-22px color-gray-8" id="resultText"></p>
  </div>
</template>

<style scoped>

</style>