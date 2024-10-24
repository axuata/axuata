<script setup lang="ts">
const props = defineProps({
  sectionTitle: String,
});
</script>

<template>
  <div class="section">
    <div class="section-title">
      <p id="section-title-p">{{ sectionTitle }}</p>
    </div>
    <div class="section-content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.section {
  padding: 0 20px;

  .section-title {
    font-size: 36px;
    font-weight: 700;
    color: var(--black-1);

    ::before {
      content: "#";
      color: var(--black-3);
      margin-right: 8px;
    }
  }

  .section-content {
    font-weight: 600;
    color: var(--black-2);
  }
}
</style>