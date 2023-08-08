// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: "~assets/css/main.css",
    configPath: 'tailwind.config',
  },
    
})