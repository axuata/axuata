<script setup lang="ts">

</script>

<template>
  <div class="font-notosansjp mx-auto max-w-1200px w-full">
    <slot />
  </div>
</template>

<style scoped>
::v-slotted(section) {
  margin: 26px 0;
}

::v-slotted(hr) {
  margin: 4px 0;
  display: flex;
  width: 100%;
  height: 1px;
  border: none;
  background-color: #d6d6d6;
}

::v-slotted(p) {
  font-size: 16px;
  font-weight: 500;
  color: #505050;
  padding-left: 8px;
  border-left: solid 1px #d6d6d6;
}

::v-slotted(a) {
  font-size: 16px;
  font-weight: 500;
  color: #0000ff;
  text-decoration: underline;
}

::v-slotted(h1) {
  font-size: 28px;
  font-weight: 600;
  color: #373737;
}

::v-slotted(h1):before {
  content: '#';
  margin-right: 3px;
  color: #505050 !important;
}
</style>