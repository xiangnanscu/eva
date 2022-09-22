<template>
  <div>
  <h1>Users page</h1>
  <ul>
    <li v-for="u in users" :key="u.id">
      {{u.name}}
    </li>
  </ul>
  </div>
</template>

<script setup>
let users = await $fetch("/api/users")
</script>