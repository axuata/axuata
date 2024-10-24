<script setup lang="ts">
const props = defineProps({
  cardLink: String,
  cardImageSrc: String,
  cardTitle: String
})
</script>

<template>
  <NuxtLink :to="cardLink" class="card">
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
  </NuxtLink>
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
    margin: 0 auto;
    border-radius: 30px;
    height: 200px;
    width: 350px;
    background-image: url("/assets/images/background/grid.webp");
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      z-index: 1;
      height: 80%;
      object-position: center;
      object-fit: cover;
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