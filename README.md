# Nuxt 3 + NaiveUI + Codestyle Starter

## [Live](https://nuxt3-naive-ui-starter.netlify.app/)

Look at the [Nuxt 3](https://nuxt.com/docs/getting-started/introduction) and [Naive UI](https://www.naiveui.com/en-US/dark/docs/introduction) documentation to learn more.

## Tools and commands:

1. **ESLint**

```bash
# check .ts,.js,.vue
npm run lint:eslint

# fix
npm run fix:eslint
```

2. **Prettier**

```bash
# check .
npm run lint:prettier

# fix
npm run fix:prettier
```

3. **Stylelint**

```bash
# check .scss,.vue
npm run lint:stylelint

# fix
npm run fix:stylelint
```

4. **Check All**

```bash
npm run lint
```

5. **Fix All**

```bash
npm run fix
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

# npm run build
```

## UI

1. **Fonts** [vfonts npm](https://www.npmjs.com/package/vfonts)

```scss
// assets/styles/main.scss

@forward 'vfonts/Lato.css';
@forward 'vfonts/FiraCode.css';
```

2. **Icons** [@vicons/ionicons5
   ](https://www.npmjs.com/package/vfonts) [xicons](https://www.xicons.org/#/)

```html
<!-- Usage -->
<script
  lang="ts"
  setup
>
  import { CubeOutline as CubeOutlineIcon } from '@vicons/ionicons5'
  import { NIcon } from 'naive-ui'
</script>

<template>
  <n-icon>
    <cube-outline-icon />
  </n-icon>
</template>
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarm build
```

Locally preview production build:

```bash
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
