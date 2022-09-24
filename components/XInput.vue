<script setup>
defineProps(["modelValue", "label"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="mb-3">
    <label class="form-label">{{label}}</label>
    <input class="form-control" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
  </div>

</template>
