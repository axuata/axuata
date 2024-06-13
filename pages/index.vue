<script setup lang="ts">

</script>

<template>
  <GlobalWelcomeSection titleText="ようこそ" descriptionTextHtml="<p>Axuataのサイトへようこそ<br>このサイトではAxuataの活動内容をまとめています。</p>" />
  <GlobalSectionWithSlot titleText="主なプロジェクト">
    <GlobalCard titleText="Axuata（ウェブサイト）" descriptionTextHtml="<p>Axuataのサイト。<br><a href='https://github.com/axuata/axuata'>Github</a></p>" />
    <GlobalCard titleText="Accents" descriptionTextHtml="<p>自由にアクセント記号を付けれるソフト。<br><a href='https://github.com/axuata/accents'>Github</a></p>" />
  </GlobalSectionWithSlot>
</template>