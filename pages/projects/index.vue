<script setup lang="ts">
import CInfoCard, { type Links } from '~/components/common/CInfoCard.vue';

const axuataLinks: Links = {
  github: {
    iconSrc: '/images/icons/brand/github.svg',
    link: 'https://github.com/axuata/axuata'
  }
}

const nuxtlyLinks: Links = {
  github: {
    iconSrc: '/images/icons/brand/github.svg',
    link: 'https://github.com/axuata/nuxtly'
  }
}

const vanillaPlusLinks: Links = {
  github: {
    iconSrc: '/images/icons/brand/github.svg',
    link: 'https://github.com/axuata/vanilla_plus'
  },
}

const assetsLinks: Links = {
  github: {
    iconSrc: '/images/icons/brand/github.svg',
    link: 'https://github.com/axuata/assets'
  }
}
</script>

<template>
  <CTitle title="Projects" description="Axuataのプロジェクト" />
  <CSection title="Web" description="ウェブ関係のプロジェクト" header-align="center" title-font="inter">
    <div class="flex flex-col items-center my-10px">
      <CInfoCard logo="/images/logos/axuata/project-logos/axuata/logo.svg" title="Axuata" description="🌍 Axuata's Personal Website" website-link="https://axuata.netlify.app" :links="axuataLinks" />
      <CInfoCard logo="/images/logos/axuata/project-logos/nuxtly/logo.svg" title="Nuxtly" description="📄 Nuxt Starter by Axuata" :links="nuxtlyLinks" />
    </div>
  </CSection>
  <CSection title="Mods" description="ゲームのMOD" header-align="center" title-font="inter">
    <div class="flex flex-col items-center my-10px">
      <CInfoCard logo="/images/logos/axuata/project-logos/vanilla_plus/logo.svg" title="Vanilla Plus" description="⚔️ Vanilla Plus mod for Hearts of Iron 4" :links="vanillaPlusLinks" />
    </div>
  </CSection>
  <CSection title="Others" description="その他" header-align="center" title-font="inter">
    <div class="flex flex-col items-center my-10px">
      <CInfoCard logo="/images/logos/axuata/project-logos/assets/logo.svg" title="Assets" description="🗂️ Static Assets Repository by Axuata" :links="assetsLinks" />
    </div>
  </CSection>
</template>

<style scoped>

</style>