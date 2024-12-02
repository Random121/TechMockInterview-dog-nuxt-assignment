// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      title: "Dog Image Viewer"
    }
  },

  typescript: {
    typeCheck: true
  },

  image: {
    domains: ["images.dog.ceo"]
  },

  colorMode: {
    preference: "light",
  },

  modules: ["@nuxt/image", "@nuxt/ui", "@nuxtjs/tailwindcss"],
})
