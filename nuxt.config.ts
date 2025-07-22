// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  css: ['@/assets/main.css'],
  routeRules: {
    '/*': {
      prerender: true,
      noScripts: true,
    },
    '/link/*': {
      prerender: true,
      noScripts: true,
    },
  },
});
