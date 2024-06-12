<script setup lang="ts">
const route = useRoute();
const currentPath = computed(() => route.path);

watch(
  currentPath,
  (newPath) => {
    onPathChanged(newPath);
  }
);

onMounted(() => {
  onPathChanged(currentPath.value);
});

function onPathChanged(newPath: string) {
  let headerMainLinkHomeElement: HTMLElement | null = document.getElementById("header-main-link--home");
  let headerMainLinkProjectsElement: HTMLElement | null = document.getElementById("header-main-link--projects");

  if (newPath && headerMainLinkHomeElement && headerMainLinkProjectsElement) {
    if (newPath === "/") {
      headerMainLinkHomeElement.style.backgroundColor = "#e8e8e8";
      headerMainLinkProjectsElement.style.backgroundColor = "transparent"

      headerMainLinkHomeElement.style.color = "#005fb8";
      headerMainLinkProjectsElement.style.color = "var(--axudev-colorset-general-fontcolor-1)"
    } else if (newPath.startsWith("/projects")) {
      headerMainLinkHomeElement.style.backgroundColor = "transparent";
      headerMainLinkProjectsElement.style.backgroundColor = "#e8e8e8"

      headerMainLinkHomeElement.style.color = "var(--axudev-colorset-general-fontcolor-1)";
      headerMainLinkProjectsElement.style.color = "#005fb8"
    } else {
      console.log("AUGH!");
    }
  }
}

</script>

<template>
  <div class="header">
    <div class="header-image">
      <img src="/assets/images/banners/axuata-banner.png" alt="">
    </div>
    <div class="header-main">
      <div class="header-main-link">
        <NuxtLink to="/" id="header-main-link--home"><i class="fa-solid fa-house"></i>ホーム</NuxtLink>
        <NuxtLink to="/projects/" id="header-main-link--projects"><i class="fa-solid fa-list"></i>プロジェクト</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  background-color: #f1f1f1;
  display: flex;
  height: 58px;
  align-items: center;
  padding: 12px 18px;

  .header-image {
    img {
      height: 48px;
      margin-right: 8px;
    }
  }

  .header-main {
    border-left: 1px solid #dbdbdb;

    .header-main-link {
      display: flex;
      align-items: center;
      margin-left: 12px;

      a {
        transition: 0.1s;
        color: var(--axudev-colorset-general-fontcolor-1);
        text-decoration: none;
        padding: 5px 11px 6px;
        margin: 0px 4px;
        font-weight: 400;
        font-size: 15px;
        border-radius: 6px;
        display: block;
      }

      i {
        margin-right: 6px;
      }
    }
  }
}
</style>