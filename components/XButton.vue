<script setup lang="ts">
const props = defineProps<{
  type?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
}>();
const buttonClass = computed(() => {
  return { btn: true, [`btn-${props.type || "primary"}`]: true };
});
</script>

<template>
  <button :class="buttonClass"><slot /></button>
</template>