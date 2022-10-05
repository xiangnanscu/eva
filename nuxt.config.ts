// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  // modules: ['bootstrap/dist/css/bootstrap.css'],
  // css: ["bootstrap/dist/css/bootstrap.css"],
  // plugins: [{ src: "~/plugins/rating.js", mode: "client" }],
  nitro: {
    preset: "node-server",
  },
});
