<template>
  <div>
    <x-table :rows="reviewRows"> </x-table>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"]
})
let reviews = await $fetch("/api/reviews");
let reviewRows = reviews.map((e) => ({
  社区: e.communityName,
  姓名: e.worker.name,
  身份证: e.worker.sfzh,
  评价: e.star,
  备注: e.note,
}));
</script>