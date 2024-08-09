<script setup lang="ts">

</script>

<template>
  <GlobalWelcomeSection titleText="プロジェクト" descriptionTextHtml="<p>プロジェクト一覧<br>このページではAxuataのプロジェクトをまとめています。</p>" />
  <GlobalSectionWithSlot titleText="ウェブ関係">
    <GlobalCard titleText="Axuata（ウェブサイト）" descriptionTextHtml="<p>Axuataのサイト<br><a href='https://github.com/axuata/axuata'>Github</a></p>" />
    <GlobalCard titleText="Japan Railway Map" descriptionTextHtml="<p>日本鉄道マップ<br><a href='https://github.com/axuata/japan-railway-map'>Github</a></p>" />
    <GlobalCard titleText="Nuxata" descriptionTextHtml="<p>AxuataのNuxtテンプレート<br><a href='https://github.com/axuata/axuata'>Github</a></p>" />
  </GlobalSectionWithSlot>
  <GlobalSectionWithSlot titleText="ソフトウェア">
    <GlobalCard titleText="Accents" descriptionTextHtml="<p>自由にアクセント記号を付けれるソフト<br><a href='https://github.com/axuata/accents'>Github</a></p>" />
    <GlobalCard titleText="Paper" descriptionTextHtml="<p>モダンなUIのメモ帳<br><a href='https://github.com/axuata/paper'>Github</a></p>" />
  </GlobalSectionWithSlot>
  <GlobalSectionWithSlot titleText="Wiki">
    <GlobalCard titleText="Axuwiki" descriptionTextHtml="<p>Axuataに関する情報がまとめられたWiki<br><a href='https://axuata.notion.site/638d9a474d384af4bab55ca0bf8c7ead?v=de371e6839e64e08ac897560b5b0f536&pvs=4'>Notion</a></p>" />
    <GlobalCard titleText="Axutrans" descriptionTextHtml="<p>音訳する際に使用する規則<br><a href='https://axuata.notion.site/8b2b537f82004d7cafc35942a8a5fc6e?v=7e1c082e85c547879a5f53f9c05786dd&pvs=4'>Notion</a></p>" />
    <GlobalCard titleText="Axudev（未完成）" descriptionTextHtml="<p>開発をする際に使用する規則<br><a href='https://axuata.notion.site/5fd2fb24e13446ddbb28c5f30da93cfd?v=37e76d01738b473cb3137bdfeabbde70&pvs=4'>Notion</a></p>" />
  </GlobalSectionWithSlot>
  <GlobalSectionWithSlot titleText="Hoi4 Mod">
    <GlobalCard titleText="Vanilla+" descriptionTextHtml="<p>バニラにいくつかの変更を加えるMOD<br><a href='https://steamcommunity.com/sharedfiles/filedetails/?id=3264951174'>Steam Workshop</a></p>" />
    <GlobalCard titleText="More Division Limit" descriptionTextHtml="<p>将軍・陸軍元帥の師団数の上限を128、64に設定するMOD<br><a href='https://steamcommunity.com/sharedfiles/filedetails/?id=3230979204'>Steam Workshop</a></p>" />
    <GlobalCard titleText="More Navy Limit" descriptionTextHtml="<p>海軍の任務部隊の最大数を128に変更するMOD<br><a href='https://steamcommunity.com/sharedfiles/filedetails/?id=3261539511'>Steam Workshop</a></p>" />
    <GlobalCard titleText="No XP for Division Editing" descriptionTextHtml="<p>師団編成を変更した際に消費されるXPを0に変更するMOD<br><a href='https://steamcommunity.com/sharedfiles/filedetails/?id=3261545786'>Steam Workshop</a></p>" />
    <GlobalCard titleText="More XP Limit" descriptionTextHtml="<p>XPの最大値を999999に変更するMOD<br><a href='https://steamcommunity.com/sharedfiles/filedetails/?id=3261550884'>Steam Workshop</a></p>" />
  </GlobalSectionWithSlot>
</template>