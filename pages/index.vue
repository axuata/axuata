<script setup lang="ts">

</script>

<template>
  <GlobalWelcomeSection titleText="ようこそ" descriptionTextHtml="<p>Axuataのサイトへようこそ<br>このサイトではAxuataの活動内容をまとめています。</p>" />
  <GlobalSectionWithSlot titleText="主なプロジェクト">
    <GlobalCard titleText="Axuata（ウェブサイト）" descriptionTextHtml="<p>Axuataのサイト。<br><a href='https://github.com/axuata/axuata'>Github</a></p>" />
    <GlobalCard titleText="Japan Railway Map" descriptionTextHtml="<p>日本鉄道マップ<br><a href='https://github.com/axuata/japan-railway-map'>Github</a></p>" />
  </GlobalSectionWithSlot>
</template>