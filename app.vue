<template>
  <app-providers :config-provider="configProvider">
    <n-global-style />

    <nuxt-layout name="default">
      <nuxt-page />
    </nuxt-layout>
  </app-providers>
</template>

<script setup lang="ts">
import { NGlobalStyle, ConfigProviderProps, darkTheme } from "naive-ui";
import AppProviders from "~~/components/functional/AppProviders";
import { useTheme } from "~~/composables/useTheme";

const { isDark } = useTheme();
const configProvider = computed<ConfigProviderProps>(() => ({
  inlineThemeDisabled: true,
  theme: isDark.value ? darkTheme : null,
}));
</script>

<style scoped></style>
