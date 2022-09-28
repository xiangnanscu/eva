<template>
  <div>
    <NuxtLink class="btn btn-primary" to="/addWorker">添加社区人员</NuxtLink>
    <x-table :rows="users">

    </x-table>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"]
})
let users = await $fetch("/api/workers")
</script>