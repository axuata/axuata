<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import '@unocss/reset/tailwind.css';

@font-face {
  font-family: 'local-inter';
  src: url('/fonts/Inter-VariableFont_opsz,wght.ttf');
}

@font-face {
  font-family: 'local-notosansjp';
  src: url('/fonts/NotoSansJP-VariableFont_wght.ttf');
}

.font-inter {
  font-family: "local-inter", serif;
}

.font-notosansjp {
  font-family: "local-notosansjp", serif;
}
</style>