<script setup>
const props = defineProps(["type", "center"]);
const alertClass = computed(() => {
  const key = props.type ? `alert-${props.type}` : `alert-warning`;
  const cls = { alert: true, [key]: true, "text-center": !!props.center };
  return cls;
});
</script>

<template>
  <div :class="alertClass"><slot /></div>
</template>
