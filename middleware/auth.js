export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuth();
  if (!auth.value.user) {
    const globalMessage = useGlobalMessage()
    globalMessage.value = '请先登录'
    return navigateTo(`/login?keepMsg=true&redirect=${to.path}`)
  } else {
    console.log("auth user:", auth.value.user)
  }
})