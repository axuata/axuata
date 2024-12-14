<script setup lang="ts">
export type Links = {
  [name: string]: {
    iconSrc: string;
    link: string;
  };
};

const props = defineProps({
  logo: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  websiteLink: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  }
});
</script>

<template>
  <div class="bg-white w-460px b-solid b-1px b-gray-2 p-10px rounded-14px my-5px">
    <div class="flex items-center justify-between">
      <div class="flex items-center ml-2px">
        <div>
          <img class="size-20px rounded-7px" :src="logo" :alt="logo" />
        </div>
        <div>
          <a v-if="websiteLink" class="font-inter text-gray-8 font-600 ml-4px" :href="websiteLink">{{ title }}</a>
          <p v-else class="font-inter text-gray-8  font-600 ml-4px">{{ title }}</p>
        </div>
      </div>
      <div class="flex items-center">
        <a class="flex items-center ml-10px" :href="link">
          <div class="i-tabler:external-link size-16px mr-6px" />
        </a>
      </div>
    </div>
    <div class="flex items-center mt-5px">
      <p class="font-inter text-gray-7">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>