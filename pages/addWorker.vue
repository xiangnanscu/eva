<template>
  <div>
    <form>
      <div>
        <x-input label="姓名" v-model="name" />
      </div>
      <div>
        <x-input label="身份证" v-model="sfzh" />
      </div>
      <div>
        <x-select label="社区名称" v-model="communityName" :choices="comms" />
      </div>
      <x-button @click.prevent="createUser">提交</x-button>
      <span>{{ message }}</span>
    </form>
  </div>
</template>

<script setup>
let name = ref("");
let sfzh = ref("");
let message = ref("");
let communityName = ref("");
let comms = (await $fetch("/api/community")).map((e) => e.name);
async function createUser(event) {
  let res = await $fetch("/api/addWorker", {
    method: "POST",
    body: { name: name.value, sfzh: sfzh.value, communityName: communityName.value },
  });
  console.log({ res });
  message = `成功创建社区人员:${name.value}`;
  name.value = "";
  sfzh.value = "";
  communityName.value = "";
}
</script>