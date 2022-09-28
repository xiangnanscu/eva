export default defineNuxtRouteMiddleware((to, from) => {
  // console.log('route middle ware:', { to, from })
  let globalError = useGlobalError();
  globalError.value = ""
})