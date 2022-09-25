// import bootstrap from "bootstrap/dist/js/bootstrap.esm.js";
import { Dropdown } from "bootstrap";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide({
    bootstrap: {
      Dropdown,
    },
  });
});
