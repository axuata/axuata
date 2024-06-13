<script setup lang="ts">
const props = defineProps({
  titleText: String,
  descriptionTextHtml: String,
})
</script>

<template>
  <div class="card">
    <div class="card-title">
      <p>{{ titleText }}</p>
    </div>
    <div v-html="descriptionTextHtml" class="card-description"></div>
  </div>
</template>

<style scoped lang="scss">
.card {
  background-color: #f2f2f2;
  margin: 16px auto;
  max-width: 400px;
  border-radius: 14px;
  padding: 12px 18px;

  .card-title {
    p {
      // line-height: 100%;
      font-size: 24px;
      font-weight: 600;
    }
  }

  .card-description {
    line-height: 120%;
  }
}
</style>