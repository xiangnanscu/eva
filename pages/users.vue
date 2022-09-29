<template>
  <div>
    <NuxtErrorBoundary>
      <template #error="{ error }">
        <p>An error occurred: {{ error }}</p>
      </template>
    </NuxtErrorBoundary>
    <NuxtLink class="btn btn-secondary" to="/addUser">添加管理员</NuxtLink>
    <x-table :rows="userRows">

    </x-table>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"]
})
let users = await $fetch("/api/users")
let userRows = users.map(e=>({
  姓名:e.name,
  身份证号: e.sfzh,
}))
</script>