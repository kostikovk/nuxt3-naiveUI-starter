<template>
  <NLayoutHeader bordered>
    <div class="container">
      <NSpace
        align="center"
        justify="space-between"
      >
        <NMenu
          :value="fullPath"
          :options="menuOptions"
          mode="horizontal"
        />

        <NSpace align="center">
          <!-- Theme Switcher -->
          <NSwitch
            :round="false"
            :value="isDark"
            @update-value="toggleTheme"
          >
            <template #checked-icon>
              <NIcon :component="MoonOutlineIcon" />
            </template>
            <template #unchecked-icon>
              <NIcon :component="SunnyOutlineIcon" />
            </template>
          </NSwitch>

          <NA
            href="https://github.com/KosKosovuch/nuxt3-naiveUI-starter"
            target="blank"
          >
            <NButton
              type="primary"
              quaternary
              circle
              size="large"
            >
              <NIcon size="large">
                <LogoGithubIcon />
              </NIcon>
            </NButton>
          </NA>
        </NSpace>
      </NSpace>
    </div>
  </NLayoutHeader>
</template>

<script setup lang="ts">
  import { NLayoutHeader, NIcon, NSwitch, NButton, NSpace, NA, NMenu } from 'naive-ui'
  import {
    LogoGithub as LogoGithubIcon,
    SunnyOutline as SunnyOutlineIcon,
    MoonOutline as MoonOutlineIcon,
    BookOutline as BookIcon,
    HomeOutline as HomeIcon
  } from '@vicons/ionicons5'
  import { NuxtLink } from '#components'

  import { useTheme } from '@/composables/useTheme'

  const { isDark, toggleTheme } = useTheme()

  const fullPath = computed(() => useRoute().fullPath)

  function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
  }

  const menuOptions = [
    {
      label: () =>
        h(
          NuxtLink,
          {
            to: '/'
          },
          () => 'Home'
        ),
      key: '/',
      icon: renderIcon(HomeIcon)
    },
    {
      label: () =>
        h(
          NuxtLink,
          {
            to: '/components'
          },
          () => 'Components'
        ),
      key: '/components',
      icon: renderIcon(BookIcon)
    }
  ]
</script>

<style lang="scss" scoped>
  .n-layout-header {
    position: static;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 16px 0;
  }
</style>
