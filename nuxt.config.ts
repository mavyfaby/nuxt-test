// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'slide-fade', mode: 'out-in' }
  },
})
