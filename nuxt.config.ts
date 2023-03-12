const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";

export default defineNuxtConfig({
  // https://nuxt.com/docs/api/configuration/nuxt-config#css
  css: ["@/assets/styles/main.scss"],

  // https://nuxt.com/docs/api/configuration/nuxt-config#build
  build: {
    transpile: isProd
      ? ["naive-ui", "vueuc", "@css-render/vue3-ssr", "@juggle/resize-observer"]
      : ["@juggle/resize-observer"],
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#vite
  vite: {
    optimizeDeps: {
      include: isDev
        ? ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"]
        : [],
    },

    css: {
      preprocessorOptions: {
        // https://nuxt.com/docs/getting-started/assets#global-styles-imports
        scss: {
          additionalData: `@use "@/assets/styles/_variables.scss" as *;`,
        },
      },
    },
  },
});
