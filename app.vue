<template>
  <div class="bg-axugray min-h-100vh px-10px">
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import '@unocss/reset/tailwind.css';

@font-face {
  font-family: 'inter';
  src: url('/fonts/Inter-VariableFont_opsz,wght.ttf') format('truetype');
}

@font-face {
  font-family: 'notosansjp';
  src: url('/fonts/NotoSansJP-VariableFont_wght.ttf') format('truetype');
}

.font-inter {
  font-family: 'inter', system-ui;
}

.font-notosansjp {
  font-family: 'notosansjp', system-ui;
}

::selection {
  background-color: #e2e8f0;
}

::-moz-selection {
  background-color: #e2e8f0;
}
</style>
<script setup lang="ts">

</script>