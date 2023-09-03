// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Interactive Comment Section | Frontend Mentor",
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },
})
