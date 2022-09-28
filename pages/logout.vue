<template>
  <div>

  </div>
</template>

<script setup>
const message = useGlobalMessage()
const auth = useAuth();
const userCookie = useCookie('user')
userCookie.value = null
auth.value.user = null
message.value = '成功退出'

</script>