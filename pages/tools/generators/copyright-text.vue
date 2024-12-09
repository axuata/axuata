<script setup lang="ts">
import type CResult from "~/components/page-specific/tools/CResult.vue";

const firstCreatedYear = ref<string>('');
const lastUpdatedYear = ref<string>('');
const ownerName = ref<string>('')
const isAllRightsReserved = ref<boolean>(false);
const resultTextElement = ref<InstanceType<typeof CResult> | null>(null);

function generate(): void {
  if (resultTextElement.value && resultTextElement.value.resultTextElement) {
    if (isAllRightsReserved.value) {
      resultTextElement.value.resultTextElement.textContent = `© ${firstCreatedYear.value} - ${lastUpdatedYear.value} ${ownerName.value} - All Rights Reserved. `;
    } else {
      resultTextElement.value.resultTextElement.textContent = `© ${firstCreatedYear.value} - ${lastUpdatedYear.value} ${ownerName.value}`;
    }
  }
}
</script>

<template>
<!--  <CKojichu />-->
<!--  <CTitle title="著作権表記テキスト生成" font="notosansjp" />-->
  <CForm>
    <div class="flex flex-col items-center">
      <CInput label="最初に作られた年" type="number" :is-required="true" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" v-model="firstCreatedYear" :input-default="{ placeholder: '2024' }" />
      <CInput label="最後に更新された年" type="number" :is-required="true" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" v-model="lastUpdatedYear" :input-default="{ placeholder: '2024' }" />
      <CInput label="著作者名" type="text" :is-required="true" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" v-model="ownerName" :input-default="{ placeholder: 'Axuata' }" />
      <CInput label="無断転載禁止" type="checkbox" :is-required="false" :is-invalid-highlighted="false" :is-readonly="false" :is-disabled="false" v-model="isAllRightsReserved" :input-default="{ placeholder: 'Axuata' }" />
      <CHorizontalLine />
      <div class="flex justify-center my-10px">
        <CButton type="primary" text="実行" @click="generate()" />
      </div>
      <CHorizontalLine />
      <div>
        <CResult type="text" ref="resultTextElement" />
      </div>
    </div>
  </CForm>
</template>

<style scoped>

</style>