<script setup lang="ts">
const noimageurl = "https://placehold.co/60x60/FFFFFF/000000?text=No+Image";
</script>

<template>
  <CWelcome title="Projects" description="Axuataのプロジェクト" />
  <div class="flex flex-col items-center">
    <CProjectsCard link="https://github.com/axuata/assets" :icon="noimageurl" title="Assets" description="🗂️ Static Assets Repository by Axuata" />
    <CProjectsCard link="https://github.com/axuata/axuata" icon="/images/icons/project-icons/axuata/icon.png" title="Axuata" description="🌍 Axuata's Personal Website" />
    <CProjectsCard link="https://github.com/axuata/nuxtly" :icon="noimageurl" title="Nuxtly" description="📄 Nuxt Starter by Axuata" />
    <CProjectsCard link="https://github.com/axuata/toolix" icon="/images/icons/project-icons/toolix/icon.png" title="Toolix" description="🛠️ Online Toolbox (開発中) " />
  </div>
</template>

<style scoped>

</style>