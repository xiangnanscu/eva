<template>
  <div>
    <NuxtErrorBoundary>
      <template #error="{ error }">
        <p>An error occurred: {{ error }}</p>
      </template>
    </NuxtErrorBoundary>
    <NuxtLink class="btn btn-secondary" to="/addUser">添加管理员</NuxtLink>
    <x-table :rows="users">

    </x-table>
  </div>
</template>

<script setup>
let users = await $fetch("/api/users")
</script>