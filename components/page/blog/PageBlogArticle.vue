<script setup lang="ts">
const props = defineProps({
  articleTitle: String,
  articleDate: String,
});
</script>

<template>
  <div class="article">
    <div class="article-header">
      <div class="article-header-title">
        <p>{{ articleTitle }}</p>
      </div>
      <div class="article-header-date">
        <p>{{ articleDate }}</p>
      </div>
    </div>
    <div class="article-content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.article {
  padding: 0 20px;
  margin: 0 auto;
  max-width: 800px;

  .article-header {
    padding: 30px 0;
    text-align: center;

    .article-header-title {
      font-size: 46px;
      font-weight: 700;
      color: var(--black-1);
    }

    .article-header-date {
      font-weight: 700;
      color: var(--black-3);
    }
  }

  .article-content {
    padding: 40px 0;

    slot {
      h1 {
        color: var(--black-1);
      }

      p {
        color: var(--black-2);
        font-weight: 700;
      }
    }
  }
}
</style>