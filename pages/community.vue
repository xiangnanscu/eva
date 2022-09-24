<template>
  <div>
    <NuxtLink class="btn btn-primary" to="/addCommunity">添加社区</NuxtLink>
    <x-table :rows="users">

    </x-table>
  </div>
</template>

<script setup>
let users = await $fetch("/api/community")
</script>