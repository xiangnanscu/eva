<template>
  <div>
  <form>
    <div><x-input label="社区名称" v-model="name"/></div>
    <div><x-input label="所属乡镇" v-model="org"/></div>
    <x-button @click.prevent="createUser">提交</x-button>
    <span>{{message}}</span>
  </form>
  </div>
</template>

<script setup>

let name = ref("")
let org = ref("")
let message = ref("")
async function createUser(event) {
  let res = await $fetch("/api/addCommunity", { method: 'POST', body: { name: name.value, org: org.value } })
  console.log({res})
  message = `成功创建社区:${name.value}`
  name.value = ""
  org.value = ""
}
</script>