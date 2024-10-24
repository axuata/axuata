<script setup lang="ts">
function generate() {
  let nameElement: HTMLInputElement | null = document.getElementById("name");
  let yearElement: HTMLInputElement | null = document.getElementById("year");
  let isAarElement: HTMLSelectElement | null = document.getElementById("isarr");
  let resultElement: HTMLParagraphElement | null = document.getElementById("result");
  let result: string | null = `© ${yearElement.value} - 2024 ${nameElement.value}`;

  if (isAarElement) {
    if (isAarElement.value === "yes") {
      result += " 無断転載を禁じます。"
    }
  }

  resultElement.innerHTML = result;
}
</script>

<template>
  <PageToolsToolWelcome title="著作権表記生成" />
  <div class="tool">
    <div class="tool-section">
      <label>著作者の名前：</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div>
      <label>最初に作られた年：</label>
      <input type="number" id="year" name="name" required>
    </div>
    <div>
      <label>無断転載禁止：</label>
      <select id="isarr">
        <option value="yes">はい</option>
        <option value="no">いいえ</option>
      </select>
    </div>
    <div>
      <button @click="generate()">生成</button>
    </div>
    <div>
      <p id="result"></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tool {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  label {
    font-size: 20px;
  }

  input {
    margin: 10px;
    padding: 4px;
    font-size: 16px;
    border-radius: 5px;
    border: 2px solid #ddd;
    box-sizing: border-box;
  }

  select {
    margin: 10px;
    padding: 4px;
    font-size: 16px;
    border-radius: 5px;
    border: 2px solid #ddd;
    box-sizing: border-box;
  }

  button {
    margin: 10px;
    padding: 6px 20px;
    font-size: 16px;
    border-radius: 5px;
    border: 2px solid #ddd;
    box-sizing: border-box;
  }
}
</style>