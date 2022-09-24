<template>
  <div>
    <NuxtLink class="btn btn-primary" to="/addCommunity">添加社区</NuxtLink>
    <!-- <x-table :rows="users">
      <NuxtLink :to="`/communityQrcode/${u.id}`">二维码</NuxtLink>
    </x-table> -->
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th v-for="col in tableColumns">{{ col }}</th>
          <th>二维码</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in rows">
          <td>{{ i + 1 }}</td>
          <td v-for="col in tableColumns">{{ row[col] }}</td>
          <td><NuxtLink :to="`/communityQrcode/${row.id}`">二维码</NuxtLink></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
let users = await $fetch("/api/community");
let rows = users.map((e) => ({ 乡镇: e.org, 社区: e.name, id:e.id }));
let tableColumns = ["乡镇", "社区"];
</script>
