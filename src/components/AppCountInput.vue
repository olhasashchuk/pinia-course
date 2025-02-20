<script setup>
defineProps({
  modelValue: { type: [Number, String], default: 0 },
});

const emit = defineEmits(["update:modelValue", "input"]);
const updateValue = (value) => {
  if(value !== null) {
    emit("update:modelValue", value)};
  }
</script>
<template>
  <span>
    <button
      class="cursor-pointer bg-gray-200 px-2 rounded-l"
      @click="updateValue(modelValue > 0 ? modelValue - 1 : null)"
    >
      -
    </button>
    <input :value="modelValue" type="number" min="0" @input="updateValue($event.target.value)" />
    <button
      class="bg-gray-200 px-2 rounded-r cursor-pointer"
      @click="updateValue(modelValue + 1)"
    >
      +
    </button>
  </span>
</template>

<style scoped>
input[type="number"] {
  appearance: none;
  -moz-appearance: textfield;
  border: 1px solid gray;
  border-color: #6b7280; /* border-gray-500 */
  width: 2.5rem; /* w-10 */
  text-align: center; /* text-center */
}
button {
  border: 1px solid gray;
}
</style>
