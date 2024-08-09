<script setup lang="ts">
const props = defineProps({
  titleText: String,
  descriptionTextHtml: String,
})
</script>

<template>
  <div class="welcome">
    <div class="welcome-title">
      <p>{{ titleText }}</p>
    </div>
    <div class="welcome-description" v-html="descriptionTextHtml"></div>
  </div>
</template>

<style scoped lang="scss">
.welcome {
  text-align: center;
  padding: 60px;
  margin: 0 auto;

  .welcome-tag {
    display: inline-flex;
    padding: 4px 16px;
    border-radius: 50px;
    background-color: #e4e4e4;
    color: var(--axudev-colorset-general-fontcolor-1);
    font-size: 14px;
    font-weight: 600;
  }

  .welcome-title {
    font-size: 48px;
    font-weight: 600;
  }

  .welcome-description {
    margin-top: 8px;
    font-weight: 400;
    line-height: 1.4;
    color: var(--axudev-colorset-general-fontcolor-2);
  }
}
</style>