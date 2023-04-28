// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@develit-io/develitesse'],
  modules: [
    'nuxt-headlessui',
  ],
  app: {
    baseURL: '/program/',
  },

})
