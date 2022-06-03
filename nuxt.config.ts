import { defineNuxtConfig } from 'nuxt'
import vue from '@vitejs/plugin-vue'
import { quasar } from '@quasar/vite-plugin'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // app
  app: {
    head: {
      title: 'Nuxt 3 quasar Starter',
      titleTemplate: '%s - Nuxt 3 quasar Starter',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3 quasar Starter',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  // auto import components
  components: true,
  globalName: 'Quasar',

  css: [
    '~/assets/styles/quasar.sass',
    '@quasar/extras/roboto-font/roboto-font.css',
    '@quasar/extras/material-icons/material-icons.css',
  ],
  // ssr: true,
  build: {
    transpile: ['quasar'],
  },

  // vue: {
  //   compilerOptions: {
  //     directiveTransforms: {
  //       'focus-visible': () => ({
  //         props: [],
  //         needRuntime: true,
  //       }),
  //     },
  //   },
  // },
  // vite plugin
  vite: {
    plugins: [
      quasar({
        sassVariables: 'assets/styles/quasar-variables.sass',
      }),
    ],
  },
})
