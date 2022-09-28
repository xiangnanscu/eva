export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    console.log('plugin error called:', { error, context })
    let globalError = useGlobalError();
    // error created by createError
    if (error?.data?.message) {
      globalError.value = error.data.message
    }
  }
})