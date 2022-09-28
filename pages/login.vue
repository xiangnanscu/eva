<template>
  <div>
    <NuxtErrorBoundary @error="someErrorLogger">
      <!-- You use the default slot to render your content -->
      <template #error="{ error }">
        You can display the error locally here.
        <button @click="error = null">This will clear the error.</button>
      </template>
    </NuxtErrorBoundary>
    <form>
      <div><x-input label="身份证" v-model="sfzh" /></div>
      <div><x-input label="密码" v-model="password" /></div>
      <x-button @click.prevent="sendCredentials">提交</x-button>
      <span>{{ message }}</span>
    </form>
  </div>
</template>

<script setup>
const app = useNuxtApp();

let error = useError();
let sfzh = ref("");
let password = ref("");
let message = ref("");
function someErrorLogger(event) {
  console.log({ event });
}

onErrorCaptured((err) => {
  console.log("onErrorCaptured", err);
});

async function sendCredentials(event) {
  let res = await $fetch("/api/login", { method: "POST", body: { sfzh: sfzh.value, password: password.value } });
  message = `登录成功`;
  sfzh.value = "";
  password.value = "";
}
</script>