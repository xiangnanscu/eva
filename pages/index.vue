<template>
  <h1>Index page</h1>
</template>
<script setup>
  /* useAsyncData() and $fetch() are auto-imported */
  // const { data, refresh, pending } = await useAsyncData('/api/hello', () => $fetch('/api/hello'))
  const res = await $fetch('/api/hello')
  console.log( res)
  console.log("done")
</script>