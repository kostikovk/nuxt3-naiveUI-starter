<template>
  <AppProviders v-bind="configProviderProps">
    <NGlobalStyle />

    <NuxtLayout name="default">
      {{ isDark }}
      <NuxtPage />
    </NuxtLayout>
  </AppProviders>
</template>

<script setup lang="ts">
  import { NGlobalStyle, ConfigProviderProps } from 'naive-ui'
  import AppProviders from '~~/components/functional/app-providers'
  import { useTheme } from '~~/composables/useTheme'

  useHead({ title: 'Nuxt 3 + NaiveUI Starter' })

  const { naiveTheme, isDark } = useTheme()
  const configProviderProps = computed<ConfigProviderProps>(() => ({
    inlineThemeDisabled: true,
    theme: naiveTheme.value
  }))
</script>
