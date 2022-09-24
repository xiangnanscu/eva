<template>
  <div>
    <client-only>
      <div style="text-align: center">
        <h2>社区名称：{{ community.name }}</h2>
        <x-select v-model="data.selectId" :choices="data.workerIds"></x-select>
        <x-alert v-if="!selected">请先选择社区工作人员再评价</x-alert>
        <div v-else>
          <star-rating v-model:rating="rating" :show-rating="false" :inline="true" />
          <div style="margin-top: 2em"><x-button @click.prevent="postReview">提交评价</x-button></div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script setup>
// https://www.npmjs.com/package/vue-star-rating
const route = useRoute();
const router = useRouter();
const rating = ref(0);
const { workers, community } = await $fetch(`/api/communityWorkers/${route.params.id}`);
const workerIds = workers.map((e) => ({ value: e.id, label: e.name }));
const data = reactive({ selectId: 0, workerIds, note: "" });
const selected = computed(() => data.selectId !== 0);
async function postReview() {
  if (!selected.value) {
    return;
  }
  const res = await $fetch("/api/addReview", {
    method: "POST",
    body: { star: rating.value, workerId: Number(data.selectId), communityName: community.name, note: data.note },
  });
  router.push("/reviewSuccess");
}
</script>