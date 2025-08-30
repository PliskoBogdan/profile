// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in"}
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  mdi: {
    cache: true,
    componentName: "MIcon",
    defaultSize: "1em",
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
   vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/assets/css/vars.scss";
          `
        }
      }
    }
  },
  modules: [
    "@nuxt/image",
    "nuxt-mdi",
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Lato: {
            wght: [300, 400, 700],
            ital: [300],
          },
        },
      },
    ],
  ],
  compatibilityDate: "2024-07-03",
  runtimeConfig: {
    googleMapsApiKey: process.env.NUXT_GOOGLE_MAPS_API_KEY,
    public: {
      googleMapsApiKey: process.env.NUXT_GOOGLE_MAPS_API_KEY
    }
  },
});
