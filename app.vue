<template>
  <div>
    <NProviders :config-provider="configProvider" inline-theme-disabled>
      <NuxtLayout>
        <div class="container">
          <header style="padding: 20px 0">
            <NH1 prefix="bar" type="success">
              <NText type="primary"> Pages </NText>
            </NH1>
            <nav>
              <NuxtLink
                v-for="{ path, name } in $router.getRoutes()"
                v-slot="{ navigate }"
                :key="path"
                :to="path"
                style="margin-right: 10px; text-decoration: none"
              >
                <NButton @click="navigate">
                  {{ (name as string).replaceAll("-", " ").toUpperCase() }}
                </NButton>
              </NuxtLink>
            </nav>
          </header>

          <NuxtPage />
        </div>
      </NuxtLayout>
    </NProviders>
  </div>
</template>

<script setup lang="ts">
import { lightTheme, ConfigProviderProps, NButton, NH1, NText } from "naive-ui";
import NProviders from "~~/components/functional/NProviders";

const configProvider = computed<ConfigProviderProps>(() => ({
  inlineThemeDisabled: true,
  theme: lightTheme,
}));
</script>

<style scoped></style>
