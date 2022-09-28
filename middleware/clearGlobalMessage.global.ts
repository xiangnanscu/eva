export default defineNuxtRouteMiddleware((to, from) => {
  if (!to.query?.keepMsg) {
    const globalMessage = useGlobalMessage()
    globalMessage.value = ""
  }
})