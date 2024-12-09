<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
// const emit = defineEmits<{
//   (event: 'click'): void;
// }>();
// const handleClick = () => {
//   emit('click');
// };
</script>

<template>
  <div v-if="type === 'primary'">
    <button class="font-notosansjp flex w-100px h-35px justify-center items-center rounded-10px bg-gray-1 transition-colors duration-100 hover:bg-gray-2">{{ text }}</button>
  </div>
</template>

<style scoped>

</style>
