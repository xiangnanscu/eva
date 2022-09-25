<template>
  <div>
    <NuxtLayout name="review">
      <client-only>
        <div class="text-center">
          <h2>{{ community.name }}工作评价</h2>
          <x-select
            v-model="data.selectId"
            :choices="data.workerIds"
            :default-choice="{ label: '点击选择工作人员', value: 0 }"
          ></x-select>
          <div v-if="selected">
            <star-rating v-model:rating="rating" :show-rating="false" :inline="true" />
            <div class="mt-2" v-if="rating > 0">
              <span class="badge bg-primary">{{ ratingMap[rating - 1] }}</span>
            </div>
            <div v-if="lowRate">
              <x-select
                :choices="reviewReasons"
                :default-choice="{ label: '点击选择评分理由', value: '' }"
                v-model="data.note"
              ></x-select>
            </div>
            <div v-if="showSubmit" class="mt-2"><x-button @click.prevent="postReview">提交评价</x-button></div>
          </div>
        </div>
      </client-only>
    </NuxtLayout>
  </div>
</template>

<script setup>
// https://www.npmjs.com/package/vue-star-rating
definePageMeta({
  layout: false,
});
useHead({
  title: `江安党建社区评价`,
});
const route = useRoute();
const router = useRouter();
const noteRating = 3;
const ratingMap = ["非常不满意", "不满意", "一般", "满意", "非常满意"];
const rating = ref(0);
const { workers, community } = await $fetch(`/api/communityWorkers/${route.params.id}`);
const workerIds = workers.map((e) => ({ value: e.id, label: e.name }));
const data = reactive({ selectId: 0, workerIds, note: "" });
const selected = computed(() => data.selectId !== 0);
const lowRate = computed(() => rating.value <= noteRating && rating.value > 0);
const showSubmit = computed(() => rating.value > noteRating || (lowRate.value && data.note));
const reviewReasons = ["没解决问题", "态度不好", "速度太慢", "其他"];
async function postReview() {
  throw "xxxx error!";
  if (!showSubmit.value) {
    return;
  }
  const res = await $fetch("/api/addReview", {
    method: "POST",
    body: { star: rating.value, workerId: Number(data.selectId), communityName: community.name, note: data.note },
  });
  router.push("/reviewSuccess");
}
</script>