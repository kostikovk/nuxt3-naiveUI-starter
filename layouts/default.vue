<template>
  <n-layout position="absolute">
    <n-layout position="absolute" has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :collapsed="collapsed"
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          :root-indent="16"
          :collapsed="collapsed"
          :collapsed-width="64"
          :options="menuOptions"
          :render-label="renderMenuLabel"
        />
      </n-layout-sider>

      <n-layout>
        <!-- Header -->

        <n-layout-header
          style="
            position: sticky;
            top: 0;
            left: 0;
            z-index: 1;
            padding: 15px 24px;
          "
          bordered
        >
          <n-space align="center" justify="space-between">
            <n-button quaternary circle @click="collapsed = !collapsed">
              <template #icon>
                <n-icon><menu-outline-icon /></n-icon>
              </template>
            </n-button>

            <n-button quaternary circle @click="toggleTheme">
              <template #icon>
                <n-icon>
                  <sunny-outline-icon v-if="!isDark" />
                  <moon-outline-icon v-else />
                </n-icon>
              </template>
            </n-button>
          </n-space>
        </n-layout-header>

        <n-layout-content content-style="padding: 24px;">
          <slot />
        </n-layout-content>

        <!-- Footer -->
        <n-layout-footer style="padding: 24px" embedded>
          Footer Content
        </n-layout-footer>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { NuxtLinkProps } from "#app";
import {
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutContent,
  NLayoutFooter,
  NIcon,
  NMenu,
  NButton,
  NSpace,
} from "naive-ui";
import type { MenuOption } from "naive-ui";
import {
  CubeOutline as CubeOutlineIcon,
  HomeOutline as HomeOutlineIcon,
  LogoGithub as LogoGithubIcon,
  MenuOutline as MenuOutlineIcon,
  SunnyOutline as SunnyOutlineIcon,
  MoonOutline as MoonOutlineIcon,
} from "@vicons/ionicons5";
import { useTheme } from "@/composables/useTheme";
import { NuxtLink } from "#components";

const menuOptions: MenuOption[] = [
  {
    label: "Home",
    key: "home",
    to: "/",
    icon: renderIcon(HomeOutlineIcon),
  },
  {
    label: "Component List",
    key: "compinents-list",
    to: "/components-list",
    icon: renderIcon(CubeOutlineIcon),
  },
  {
    label: "Github",
    key: "github",
    href: "https://github.com/KosKosovuch/nuxt3-naiveUI-starter#nuxt-3--naiveui--codestyle-starter",
    icon: renderIcon(LogoGithubIcon),
  },
];

const collapsed = ref(true);

const { isDark, toggleTheme } = useTheme();

function renderMenuLabel(option: MenuOption) {
  if ("href" in option) {
    return h(
      "a",
      { href: option.href, target: "_blank", rel: "noopenner noreferrer" },
      [option.label as string]
    );
  } else if ("to" in option) {
    return h(NuxtLink, { to: option.to } as NuxtLinkProps, {
      default: () => option.label as string,
    });
  }

  return option.label as string;
}

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
</script>
