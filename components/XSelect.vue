<script setup>
const props = defineProps(["modelValue", "label", "choices"]);
defineEmits(["update:modelValue"]);
const selectChoices = computed(() => {
  return props.choices.map((c) =>
    typeof c !== "object" ? { value: c, label: c } : { value: c.value, label: c.label }
  );
});
</script>

<template>
  <div class="mb-3">
    <label class="form-label">{{ label }}</label>
    <select
      class="form-control"
      required="required"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option disabled value="">请选择</option>
      <option v-for="c in selectChoices" :value="c.value">{{ c.label }}</option>
    </select>
  </div>
</template>