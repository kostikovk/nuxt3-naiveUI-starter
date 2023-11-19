import eslintPlugin from 'vite-plugin-eslint'
import stylelintPlugin from 'vite-plugin-stylelint'

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],

  pinia: {
    storesDirs: ['./store/modules']
  },

  // https://github.com/nuxt/nuxt/issues/20211
  experimental: {
    renderJsonPayloads: true
  },

  typescript: {
    strict: true
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#css
  css: ['@/assets/styles/main.scss'],

  // https://nuxt.com/docs/api/configuration/nuxt-config#build
  build: {
    transpile: isProd
      ? ['naive-ui', 'vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer']
      : ['@juggle/resize-observer']
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#vite
  vite: {
    optimizeDeps: {
      include: isDev ? ['naive-ui', 'vueuc', 'date-fns-tz/formatInTimeZone'] : []
    },

    css: {
      preprocessorOptions: {
        // https://nuxt.com/docs/getting-started/assets#global-styles-imports
        scss: {
          additionalData: '@use "@/assets/styles/global.scss" as *;'
        }
      }
    },

    plugins: isDev ? [eslintPlugin(), stylelintPlugin()] : []
  }
})
