<template>
  <div>
    <!-- <NuxtErrorBoundary @error="someErrorLogger">
      <template #error="{ error }">
        You can display the error locally here.
        <button @click="error = null">This will clear the error.</button>
      </template>
    </NuxtErrorBoundary> -->
    <form>
      <div><x-input label="身份证" v-model="sfzh" /></div>
      <div><x-input label="密码" v-model="password" /></div>
      <x-button @click.prevent="sendCredentials">提交</x-button>
    </form>
  </div>
</template>

<script setup>
const app = useNuxtApp();
const auth = useAuth();
const router = useRouter();
const route = useRoute();
const globalMessage = useGlobalMessage();

let sfzh = ref("");
let password = ref("");
let message = ref("");

async function sendCredentials(event) {
  let user = await $fetch("/api/login", {
    method: "POST",
    body: { sfzh: sfzh.value, password: password.value },
  });
  auth.value.user = user;
  globalMessage.value = "登录成功";
  await navigateTo({ path: route.query?.redirect || "/", query: { keepMsg: true } });
}
</script>