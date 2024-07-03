// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  mdi: {
    cache: true,
    componentName: 'VIcon',
    defaultSize: '1em'
  },
  alias: {
    '@': resolve(__dirname, '/')
  },
  modules: [
    '@nuxt/image',
    'nuxt-mdi',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        Lato: {
          wght: [300, 400, 700],
          ital: [300]
        },
      }
  }],
  ],
  compatibilityDate: '2024-07-03',
})