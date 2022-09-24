// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  // modules: ['bootstrap-vue-3/nuxt'],
  css: ["bootstrap/dist/css/bootstrap.css"],
  // plugins: [{ src: "~/plugins/rating.js", mode: "client" }],
  nitro: {
    preset: "node-server",
  },
});
