<script setup lang="ts">
const props = defineProps({
  cardLink: String,
  cardImageSrc: String,
  cardTitle: String
})
</script>

<template>
  <a :href="cardLink" class="card">
    <div class="card-image">
      <img :src="cardImageSrc" :alt="cardImageSrc" />
    </div>
    <div class="card-content">
      <div class="card-content-title">
        <p>{{ cardTitle }}</p>
      </div>
      <div class="card-content-description">
        <slot />
      </div>
    </div>
  </a>
</template>

<style scoped lang="scss">
.card {
  text-decoration: none;
  margin: 20px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  .card-image {
    position: relative; /* 位置を制御するために relative を設定 */
    border-radius: 30px;
    height: 200px;
    width: 350px;
    overflow: hidden;
    background-image: url("/assets/images/background/grid.webp");
    background-size: cover; /* 背景画像を全体に表示 */
    background-position: center; /* 背景画像を中央に配置 */
    display: flex; /* フレックスボックスを有効にする */
    justify-content: center; /* 水平方向の中央配置 */
    align-items: center; /* 垂直方向の中央配置 */

    img {
      position: relative; /* 画像の前面に配置 */
      z-index: 1; /* 背景より前に表示 */
      height: 80%;
      object-position: center;
      object-fit: cover; /* 画像のアスペクト比を維持しつつ親要素に収まるように */
    }
  }

  .card-content {
    text-align: center;
    padding: 5px;

    .card-content-title {
      font-size: 32px;
      font-weight: 700;
      color: var(--black-1) !important;
    }

    .card-content-description {
      color: var(--black-3) !important;
      font-size: 18px;
    }
  }
}
</style>