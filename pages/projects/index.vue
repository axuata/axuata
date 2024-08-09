<script setup lang="ts">

</script>

<template>
  <GlobalWelcomeSection titleText="プロジェクト" descriptionTextHtml="<p>プロジェクト一覧<br>このページではAxuataのプロジェクトをまとめています。</p>" />
  <GlobalSectionWithSlot titleText="ウェブ関係">
    <GlobalCard titleText="Axuata（ウェブサイト）" descriptionTextHtml="<p>Axuataのサイト<br><a href='https://github.com/axuata/axuata'>Github</a></p>" />
    <GlobalCard titleText="Nuxata" descriptionTextHtml="<p>AxuataのNuxtテンプレート<br><a href='https://github.com/axuata/axuata'>Github</a></p>" />
  </GlobalSectionWithSlot>
  <GlobalSectionWithSlot titleText="Wiki">
    <GlobalCard titleText="Axuwiki" descriptionTextHtml="<p>Axuataに関する情報がまとめられたWiki<br><a href='https://axuata.notion.site/638d9a474d384af4bab55ca0bf8c7ead?v=de371e6839e64e08ac897560b5b0f536&pvs=4'>Notion</a></p>" />
    <GlobalCard titleText="Axutrans" descriptionTextHtml="<p>音訳する際に使用する規則<br><a href='https://axuata.notion.site/8b2b537f82004d7cafc35942a8a5fc6e?v=7e1c082e85c547879a5f53f9c05786dd&pvs=4'>Notion</a></p>" />
    <GlobalCard titleText="Axudev（未完成）" descriptionTextHtml="<p>開発をする際に使用する規則<br><a href='https://axuata.notion.site/5fd2fb24e13446ddbb28c5f30da93cfd?v=37e76d01738b473cb3137bdfeabbde70&pvs=4'>Notion</a></p>" />
  </GlobalSectionWithSlot>
</template>