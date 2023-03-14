<template>
  <app-providers v-bind="configProviderProps">
    <n-global-style />

    <nuxt-layout name="default">
      <nuxt-page />
    </nuxt-layout>
  </app-providers>
</template>

<script setup lang="ts">
  import { NGlobalStyle, ConfigProviderProps } from 'naive-ui'
  import AppProviders from '~~/components/functional/app-providers'
  import { useTheme } from '~~/composables/useTheme'

  useHead({ title: 'Nuxt 3 + NaiveUI Starter' })

  const { naiveTheme } = useTheme()
  const configProviderProps = computed<ConfigProviderProps>(() => ({
    inlineThemeDisabled: true,
    theme: naiveTheme.value
  }))
</script>
