<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  isRequired: {
    type: Boolean,
    required: true,
  },
  isInvalidHighlighted: {
    type: Boolean,
    required: true,
  },
  isReadonly: {
    type: Boolean,
    required: true,
  },
  isDisabled: {
    type: Boolean,
    required: true,
  },
  modelValue: {
    type: [String, Number, Boolean],
    required: true,
  },
  inputDefault: {
    type: Object as () => {
      placeholder?: string,
    },
    required: false,
  },
  inputFile: {
    type: Object as () => {
      accept?: string,
    },
    required: false,
  },
  inputRange: {
    type: Object as () => {
      min?: number,
      max?: number,
      step?: number,
    },
    required: false,
  }
});
const emit = defineEmits(['update:modelValue']);

function handleInput(event: Event) {
  if (props.type === 'select') {
    const input = event.target as HTMLSelectElement;
    emit('update:modelValue', input.selectedIndex);
  } else if (props.type === 'checkbox') {
    const input = event.target as HTMLInputElement;
    emit('update:modelValue', input.checked);
  } else if (props.type === 'file') {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        emit('update:modelValue', reader.result);
      };
      reader.readAsText(file);
    }
  } else {
    const input = event.target as HTMLInputElement;
    emit('update:modelValue', input.value);
  }
}
</script>

<template>
  <div class="flex items-center my-6px">
    <div class="flex justify-end items-center w-180px">
      <p class="font-notosansjp">{{ label }}</p>
      <p class="color-red-6" v-if="isRequired">*</p>
      <p>：</p>
    </div>
    <div class="flex justify-start items-center w-240px h-34px">
      <div class="flex items-center w-full h-full" v-if="type === 'checkbox'"> <!-- checkbox -->
        <input
            :type="type"
            :required="isRequired"
            :placeholder="inputDefault?.placeholder"
            class="font-notosansjp flex h-20px w-full b-solid b-1px b-gray-3 bg-white rounded-8px transition-colors duration-100 hover:b-gray-4 px-8px"
            :class="isInvalidHighlighted ? 'invalid:border-red-5 invalid:hover:border-red-5' : ''"
            @input="handleInput"
        />
      </div>
      <div class="flex items-center w-full h-full" v-else-if="type === 'file'"> <!-- file -->
        <input
            :type="type"
            :required="isRequired"
            :placeholder="inputDefault?.placeholder"
            class="font-notosansjp flex items-center h-full w-full b-solid b-1px bg-white b-gray-3 rounded-8px transition-colors duration-100 hover:b-gray-4 pr-8px file:h-full file:w-60px file:bg-gray-1 file:b-none file:hover:bg-gray-2"
            :class="isInvalidHighlighted ? 'invalid:border-red-5 invalid:hover:border-red-5' : ''"
            :accept="inputFile?.accept"
            @input="handleInput"
        />
      </div>
      <div class="flex items-center w-full h-full" v-else-if="type === 'color'"> <!-- color -->
        <input
            :type="type"
            :required="isRequired"
            :placeholder="inputDefault?.placeholder"
            class="font-notosansjp flex items-center h-full w-full b-solid b-1px bg-white b-gray-3 rounded-8px transition-colors duration-100 hover:b-gray-4"
            :class="isInvalidHighlighted ? 'invalid:border-red-5 invalid:hover:border-red-5' : ''"
            @input="handleInput"
        />
      </div>
      <div class="flex items-center w-full h-full" v-else-if="type === 'range'"> <!-- range -->
        <input
            :type="type"
            :required="isRequired"
            class="font-notosansjp flex items-center h-full w-full b-solid b-1px bg-white b-gray-3 rounded-8px transition-colors duration-100 hover:b-gray-4"
            :class="isInvalidHighlighted ? 'invalid:border-red-5 invalid:hover:border-red-5' : ''"
            :min="inputRange?.min"
            :max="inputRange?.max"
            :step="inputRange?.step"
            @input="handleInput"
        />
      </div>
      <div class="flex items-center w-full h-full" v-else-if="type === 'select'"> <!-- select -->
        <select
            :required="isRequired"
            class="font-notosansjp flex w-full h-full b-solid b-1px bg-white b-gray-3 rounded-8px transition-colors duration-100 hover:b-gray-4 px-8px"
            :class="isInvalidHighlighted ? 'invalid:border-red-5 invalid:hover:border-red-5' : ''"
            @change="handleInput"
        >
          <slot />
        </select>
      </div>
      <div class="flex items-center w-full h-full" v-else> <!-- others -->
        <input
            :type="type"
            :required="isRequired"
            :placeholder="inputDefault?.placeholder"
            class="font-notosansjp flex w-full h-full b-solid b-1px bg-white b-gray-3 rounded-8px transition-colors duration-100 hover:b-gray-4 px-8px"
            :class="isInvalidHighlighted ? 'invalid:border-red-5 invalid:hover:border-red-5' : ''"
            @input="handleInput"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  outline: none;
}
</style>

<!--      <div class="flex w-240px" v-if="type === 'password'">-->
<!--        <input-->
<!--            :type="type"-->
<!--            :required="isRequired"-->
<!--            :placeholder="inputDefault?.placeholder"-->
<!--            class="h-34px w-full b-solid b-1px b-gray-3 bg-white rounded-8px transition-colors duration-100 hover:b-gray-4 px-8px"-->
<!--            :class="isInvalidHighlighted ? 'invalid:border-red-5 invalid:hover:border-red-5' : ''"-->
<!--            @input="handleInput"-->
<!--            id="input-password"-->
<!--        />-->
<!--        <button class="ml-6px size-34px flex justify-center items-center b-solid b-1px b-gray-3 bg-gray-1 rounded-8px transition-colors duration-100 hover:b-gray-4 px-8px" @click="togglePasswordHided"><div id="input-password-icon" class="i-tabler-eye-off !size-26px" /></button>-->
<!--      </div>-->