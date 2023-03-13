<template>
  <app-providers :config-provider="configProvider">
    <n-global-style />

    <nuxt-layout name="default">
      <nuxt-page />
    </nuxt-layout>
  </app-providers>
</template>

<script setup lang="ts">
import { NGlobalStyle, ConfigProviderProps } from "naive-ui";
import AppProviders from "~~/components/functional/AppProviders";
import { useTheme } from "~~/composables/useTheme";

const { naiveTheme } = useTheme();
const configProvider = computed<ConfigProviderProps>(() => ({
  inlineThemeDisabled: true,
  theme: naiveTheme.value,
}));
</script>
