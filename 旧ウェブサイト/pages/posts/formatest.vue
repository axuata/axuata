<script setup lang="ts">

</script>

<template>
  <CFormatter>
    <h1>H1 見出し１</h1>

    <h2>H2 見出し２</h2>

    <h3>H3 見出し３</h3>

    <section>
      <p>section</p>
    </section>

    <p>P 段落</p>

    <b>B 太字</b>

    <p><a href="https://example.com/">A リンク</a></p> <!--  NuxtLinkも同じ  -->

    <p><code>console.log("codeタグ！");</code></p>

    <ul>
      <li>ul + li 箇条書き</li>
    </ul>

    <blockquote>
      <p>❓</p>
      Blockquote 引用！！！
    </blockquote>
  </CFormatter>
</template>

<style scoped>

</style>