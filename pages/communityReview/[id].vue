<template>
  <div>
    <client-only>
      <div style="text-align: center; margin-top: 2em">
        <h2>社区名称：{{ community.name }}</h2>
        <x-select
          v-model="data.selectId"
          :choices="data.workerIds"
          :default-choice="{ label: '请选择您要评价的工作人员', value: 0 }"
        ></x-select>
        <x-alert v-if="!selected">请先选择社区工作人员再评价</x-alert>
        <div v-else>
          <star-rating v-model:rating="rating" :show-rating="false" :inline="true" />
          <h4 style="margin-top: 1em" v-if="rating > 0">
            <span class="badge bg-secondary">{{ ratingMap[rating - 1] }}</span>
          </h4>
          <div v-if="rating <= noteRating && rating > 0">
            <x-select
              :choices="reviewReasons"
              :default-choice="{ label: '请选择您的评分理由', value: '' }"
              v-model="data.note"
            ></x-select>
          </div>
          <div v-if="showSubmit" style="margin-top: 2em"><x-button @click.prevent="postReview">提交评价</x-button></div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script setup>
// https://www.npmjs.com/package/vue-star-rating
const route = useRoute();
const router = useRouter();
const noteRating = 3;
const ratingMap = ["非常不满意", "不满意", "一般", "满意", "非常满意"];
const rating = ref(0);
const { workers, community } = await $fetch(`/api/communityWorkers/${route.params.id}`);
const workerIds = workers.map((e) => ({ value: e.id, label: e.name }));
const data = reactive({ selectId: 0, workerIds, note: "" });
const selected = computed(() => data.selectId !== 0);
const showSubmit = computed(() => data.selectId !== 0);
const reviewReasons = ["没解决问题", "态度不好", "速度太慢", "其他"];
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