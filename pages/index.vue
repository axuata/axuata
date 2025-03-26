<script setup lang="ts">
const greet = ref<string>('Welcome!');
const clock = ref<string>('XX:XX:XX');
let clockInterval: ReturnType<typeof setTimeout>;

onMounted(() => {
  const date: Date = new Date() as Date;
  const currentHour: number = date.getHours() as number;

  clockInterval = setInterval(() => {
    const dateForClock: Date = new Date() as Date;
    clock.value = `${dateForClock.getHours().toString().padStart(2, '0')}:${dateForClock.getMinutes().toString().padStart(2, '0')}:${dateForClock.getSeconds().toString().padStart(2, '0')}`;
  }, 500);

  if (date && currentHour) {
    if (currentHour >= 5 && currentHour < 10) {
      greet.value = 'Good morning!';
    } else if (currentHour >= 10 && currentHour <= 17) {
      greet.value = 'Hello!';
    } else if (currentHour >= 17 || currentHour < 5) {
      greet.value = 'Good evening!';
    } else {
      greet.value = 'Hello!';
    }
  } else {
    if (!date) {
      console.warn(`date is null!`);
    } else if (!currentHour) {
      console.warn(`time is null!`);
    }
  }
});

onBeforeUnmount(() => {
  clearInterval(clockInterval);
});
</script>

<template>
  <!-- Welcome! -->
  <div class="text-center mx-auto py-50px">
    <p class="font-en font-600 text-60px text-transparent bg-clip-text bg-gradient-to-b from-gray-6 to-gray-9 line-height-tight">{{ greet }}</p>
    <p class="font-ja font-500 text-transparent bg-clip-text bg-gradient-to-b from-gray-6 to-gray-9">{{ clock }}</p>
  </div>

  <!-- Profile -->
  <CSection title="I'm Axuata" title-align="left">
    <div class="font-ja font-500 color-gray-6">
      <p>私の名前はAxuataです。AxuataかYottakaと呼んでください！</p>
    </div>
  </CSection>
  <CSection title="My Hobbies" title-align="left">
    <div class="font-ja font-500 color-gray-6">
      <p><b>WEB開発</b>が好きで、たまに<b>Rust</b>などの他の言語も触れています。</p>
      <p><b>海外の音楽</b>も好きで、Coldplayの<a href="https://www.youtube.com/watch?v=dvgZkm1xWPE">Viva la Vida</a>や<a href="https://www.youtube.com/watch?v=FM7MFYoylVs">Something Just Like This</a>などの洋楽をよく聴きます。</p>
      <p>また、ゲームも好きで、<b>Hoi4(Hearts of Iron 4)</b>などのゲームを遊んでいます。</p>
    </div>
  </CSection>
<!--  <CSection title="My Skills" title-align="left">-->
<!--    <div>-->
<!--      -->
<!--    </div>-->
<!--  </CSection>-->
  <CSection title="Links" title-align="left">
    <div class="my-8px flex rounded-16px b-solid b-gray-3 b-1px *:p-16px w-fit z-9999">
      <a href="https://x.com/axuata_x" class="hover:scale-105 transition-all duration-75 rounded-16px">
        <NuxtImg src="/images/brands/x.png" class="size-30px" />
      </a>
      <a href="https://github.com/axuata" class="hover:scale-105 transition-all duration-75 rounded-16px">
        <NuxtImg src="/images/brands/github.png" class="size-30px" />
      </a>
      <a href="https://misskey.io/@axuata" class="hover:scale-105 transition-all duration-75 rounded-16px">
        <NuxtImg src="/images/brands/misskeyio.png" class="size-30px" />
      </a>
    </div>
  </CSection>
</template>

<style scoped>

</style>