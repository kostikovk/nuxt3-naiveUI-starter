<template>
  <AppProviders v-bind="configProviderProps">
    <NGlobalStyle />

    <NuxtLayout name="default">
      <NSpace
        vertical
        size="large"
      >
        <CounterStore />

        <NuxtPage />
      </NSpace>
    </NuxtLayout>
  </AppProviders>
</template>

<script setup lang="ts">
  import { NGlobalStyle, ConfigProviderProps, NSpace } from 'naive-ui'
  import AppProviders from '~~/components/functional/app-providers'
  import { useTheme } from '~~/composables/useTheme'
  import CounterStore from '~/components/examples/counter-store.vue'

  useHead({ title: 'Nuxt 3 + NaiveUI Starter' })

  const { naiveTheme } = useTheme()
  const configProviderProps = computed<ConfigProviderProps>(() => ({
    inlineThemeDisabled: true,
    theme: naiveTheme.value
  }))
</script>
