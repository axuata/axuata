<script setup lang="ts">
import type CResult from "~/components/page-specific/tools/CResult.vue";

const inputValue = ref<string>('');
const inputValueNumber = ref<number>(0)
const resultTextElement = ref<InstanceType<typeof CResult> | null>(null);

function test(): void {
  if (resultTextElement.value && resultTextElement.value.resultTextElement) {
    resultTextElement.value.resultTextElement.textContent = String(inputValue.value);
  }
}
</script>

<template>
  <!--  <CKojichu />-->
  <!--  <CTitle title="著作権表記テキスト生成" font="notosansjp" />-->
  <CForm>
    <p>{{ inputValue }}, {{ inputValueNumber }}</p>
    <div class="flex flex-col items-center">
      <CInput label="テキスト" type="text" :is-required="false" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" v-model="inputValue" :input-default="{ placeholder: 'テキスト' }" />
      <CInput label="数字" type="number" :is-required="false" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" v-model="inputValue" />
      <CInput label="電話番号" type="tel" :is-required="false" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" v-model="inputValue" />
      <CInput label="メールアドレス" type="email" :is-required="false" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" v-model="inputValue" />
      <CInput label="パスワード" type="email" :is-required="false" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" v-model="inputValue" />
      <CInput label="URL" type="url" :is-required="false" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" v-model="inputValue" />
      <CInput label="検索" type="search" :is-required="false" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" v-model="inputValue" />
      <CInput label="日付" type="date" :is-required="false" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" v-model="inputValue" />
      <CInput label="日付+時間" type="datetime-local" :is-required="false" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" v-model="inputValue" />
      <CInput label="時間" type="time" :is-required="false" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" v-model="inputValue" />
      <CInput label="チェックボックス" type="checkbox" :is-required="false" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" v-model="inputValue" />
      <CInput label="ファイル" type="file" :is-required="false" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" v-model="inputValue" :input-file="{ accept: 'image/png' }" />
      <CInput label="色" type="color" :is-required="false" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" v-model="inputValue" />
      <CInput label="レンジ" type="range" :is-required="false" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" :input-range="{ min: -100, max: 10, step: 1 }" v-model="inputValue" />
      <CInput label="選択肢" type="select" :is-required="false" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" v-model="inputValueNumber">
        <option>asfdd</option>
        <option>asfdjoif</option>
      </CInput>
    </div>
    <div class="flex justify-center my-10px">
      <CButton type="primary" text="実行" @click="test()" />
    </div>
    <CHorizontalLine />
    <div>
      <CResult type="text" ref="resultTextElement" />
    </div>
  </CForm>
</template>

<style scoped>

</style>