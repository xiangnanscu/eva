<template>
  <client-only>
    <h2>{{ community.name }}</h2>
    <x-select v-model="data.selectId" :choices="data.workerIds"></x-select>
    <star-rating v-model:rating="rating" :show-rating="false" />
    <x-button @click.prevent="postReview">提交评价</x-button>
  </client-only>
</template>

<script setup>
// https://www.npmjs.com/package/vue-star-rating
const route = useRoute();
const rating = ref(0);
const { workers, community } = await $fetch(`/api/communityWorkers/${route.params.id}`);
const workerIds = workers.map((e) => ({ value: e.id, label: e.name }));
const data = reactive({ selectId: 0, workerIds, note: "" });
async function postReview() {
  const res = await $fetch("/api/addReview", {
    method: "POST",
    body: { star: rating.value, workerId: Number(data.selectId), communityName: community.name, note: data.note },
  });
  console.log({ res });
}
</script>