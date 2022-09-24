<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<script>
import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
})
</script>