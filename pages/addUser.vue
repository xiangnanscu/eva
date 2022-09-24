<template>
  <div>
  <form>
    <div><x-input label="姓名" v-model="name"/></div>
    <div><x-input label="身份证" v-model="sfzh"/></div>
    <x-button @click.prevent="createUser">提交</x-button>
    <span>{{message}}</span>
  </form>
  </div>
</template>

<script setup>

let name = ref("")
let sfzh = ref("")
let message = ref("")
async function createUser(event) {
  let res = await $fetch("/api/addUser", { method: 'POST', body: { name: name.value, sfzh: sfzh.value } })
  console.log({res})
  message = `成功创建管理员:${name.value}`
  name.value = ""
  sfzh.value = ""
}
</script>