<script setup lang="ts">

</script>

<template>
  <CHero />
  <CSection title="About Me" title-align="center">
    <div class="font-notosansjp text-center">
      <p>茨城県在住の中学三年生・ゲームとウェブ開発が好き</p>
    </div>
  </CSection>
  <CSection title="Projects" title-align="center">
    <div class="flex flex-col items-center flex-wrap">
      <CCard logo="/images/logos/axuata/project-logos/axuata/logo.png" title="Axuata" description="🌍 Axuata's Personal Website" link="https://github.com/axuata/axuata" :width="460" />
      <CCard logo="/images/logos/axuata/project-logos/nuxtly/logo.png" title="Nuxtly" description="📄 Nuxt Starter by Axuata" link="https://github.com/axuata/nuxtly" :width="460" />
      <CCard logo="/images/logos/axuata/project-logos/assets/logo.png" title="Assets" description="🗂️ Static Assets Repository by Axuata" link="https://github.com/axuata/assets" :width="460" />
    </div>
  </CSection>
</template>

<style scoped>

</style>