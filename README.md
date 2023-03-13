# Nuxt 3 + NaiveUI + Codestyle Starter

Look at the [Nuxt 3](https://nuxt.com/docs/getting-started/introduction) and [Naive UI](https://www.naiveui.com/en-US/dark/docs/introduction) documentation to learn more.

## Setup

```bash
# 1. clone repo
git clone https://github.com/KosKosovuch/nuxt3-naiveUI-starter.git

# 2. Rename folder
mv nuxt3-naiveUI-starter my-project

# 3. Go to folder
cd my-project

# 4. remove .git
rm -rf .git

# 5. Init git
git init

# .nvmrc
nvm use

# install dependencies
npm i

# 6. Change branch
git branch -M main

# 7. Add first commit
git add .
git commit -m "init project"

# 8. Add remote
git remote add origin ...
git push -u origin main
```

## Tools and commands:

1. **ESLint**

```bash
# check .ts,.vue
npm run lint:js
```

2. **Prettier**

```bash
# check .
npm run lint:prettier
```

3. **Stylelint**

```bash
# check .scss,.vue
npm run lint:stylelint
```

4. **Check All**

```bash
npm run lint
```

5. **Fix All**

```bash
npm run lint:fix
```

6. **Commitizen**. Using [git-cz](https://github.com/streamich/git-cz)

```bash
npm run ct
```

5. **Husky** `.husky/pre-commit`

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint:fix
```

6. **Husky** `.husky/pre-push`

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run build
```

## UI

1. **Fonts** [vfonts npm](https://www.npmjs.com/package/vfonts)

```scss
// assets/styles/main.scss

@forward "vfonts/Lato.css";
@forward "vfonts/FiraCode.css";
```

2. **Icons** [@vicons/ionicons5
   ](https://www.npmjs.com/package/vfonts) [xicons](https://www.xicons.org/#/)

```html
<!-- Usage -->
<script lang="ts" setup>
  import { CubeOutline as CubeOutlineIcon } from "@vicons/ionicons5";
  import { NIcon } from "naive-ui";
</script>

<template>
  <n-icon>
    <cube-outline-icon />
  </n-icon>
</template>
```

3. **Theming**

```ts
// composables/useTheme.ts

import { useState } from "#app";
import { computed } from "vue";
import { useOsTheme, darkTheme } from "naive-ui";

type Theme = "light" | "dark";

export const useTheme = () => {
  const themeCookie = useCookie<Theme>("theme");
  const activeTheme = useState<Theme>("theme", () =>
    themeCookie.value ? themeCookie.value : useOsTheme().value ?? "light"
  );

  const isDark = computed(() => activeTheme.value === "dark");
  const naiveTheme = computed(() => (isDark.value ? darkTheme : null));

  const setTheme = (value: Theme) => {
    activeTheme.value = value;
    themeCookie.value = value;
  };

  const toggleTheme = () =>
    isDark.value ? setTheme("light") : setTheme("dark");

  return { toggleTheme, isDark, activeTheme, naiveTheme };
};
```

```html
<!-- app.vue -->
<template>
  <app-providers :config-provider="configProvider">
    <n-global-style />

    <nuxt-layout name="default">
      <nuxt-page />
    </nuxt-layout>
  </app-providers>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { NGlobalStyle, ConfigProviderProps } from "naive-ui";
  import AppProviders from "~~/components/functional/AppProviders";
  import { useTheme } from "~~/composables/useTheme";

  const { naiveTheme } = useTheme();
  const configProvider = computed<ConfigProviderProps>(() => ({
    inlineThemeDisabled: true,
    theme: naiveTheme.value,
  }));
</script>
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
