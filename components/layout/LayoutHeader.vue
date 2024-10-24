<script setup lang="ts">
const route = useRoute();
const currentPath = ref(route.path);

onMounted(() => {
  changeBackground(currentPath.value);

  watch(
      () => route.path,
      (newPath) => {
        currentPath.value = newPath;
        changeBackground(newPath);
      }
  )
})

function changeBackground(path: string) {
  let linkItems: HTMLElement[] | null = document.getElementsByClassName("header-content-item");
  let activeLinkId: string | null = null;

  if (path === "/") {
    activeLinkId = "link-home";
  } else if (path.startsWith("/projects")) {
    activeLinkId = "link-projects";
  } else if (path.startsWith("/blog")) {
    activeLinkId = "link-blog";
  } else if (path.startsWith("/tools")) {
    activeLinkId = "link-tools";
  }

  for (let link of linkItems) {
    link.style.backgroundColor = "transparent";
  }

  if (activeLinkId) {
    const activeLinkElement: HTMLElement | null = document.getElementById(activeLinkId);

    if (activeLinkElement) {
      activeLinkElement.style.backgroundColor = "#c7eaff";
    }
  }
}
</script>

<template>
  <div class="header">
    <div class="header-banner">
      <img src="/assets/images/axuata/banner/axuata-banner.png" alt="Axuata's Banner">
    </div>
    <div class="header-content">
      <NuxtLink to="/" class="header-content-item" id="link-home">ホーム</NuxtLink>
      <NuxtLink to="/projects/" class="header-content-item" id="link-projects">プロジェクト</NuxtLink>
      <NuxtLink to="/blog/" class="header-content-item" id="link-blog">ブログ</NuxtLink>
      <NuxtLink to="/tools/" class="header-content-item" id="link-tools">ツール</NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;

  .header-banner {
    img {
      height: 60px;
    }
  }

  .header-content {
    display: flex;

    .header-content-item {
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      //height: 35px;
      //width: 120px;
      padding: 6px 20px;
      margin: 0 10px 0 0;
      text-decoration: none;
      color: #000000;
      //background-color: #c3ecf3;
      font-size: 14px;
      font-weight: 600;
      transition: background-color 0.2s;
    }
  }
}
</style>