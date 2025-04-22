<script setup lang="ts">

</script>

<template>
  <CPageTitle title="Posts" desc="Axuataによる投稿" />
  <CSection title="News" title-align="center">
    <div class="mx-auto w-fit">
      <CLinkCard href="/posts/news/2025-03-25" emoji="✨" title="リニューアルのお知らせ" desc="2025/03/25" />
    </div>
  </CSection>
  <CSection title="Tech" title-align="center">
    <div class="font-en font-500 text-center">
      <a href="https://zenn.dev/axuata">Zenn</a>
    </div>
  </CSection>
  <DevOnly>
    <CLinkCard href="/posts/formatest" emoji="✨" title="Formatterのテスト" desc="2025/03/26" />
  </DevOnly>
</template>

<style scoped>

</style>