<template>
  <n-space
    vertical
    size="large"
  >
    <section>
      <n-h1 prefix="bar">
        <n-text type="primary"> Nuxt 3 + NaiveUI Starter </n-text>
      </n-h1>

      <n-p>
        Starter kit for developing projects with
        <n-text type="primary"> Nuxt 3 </n-text>
        and
        <n-text type="primary"> NaiveUI </n-text>
      </n-p>

      <n-h2>
        <n-text type="primary"> Tools: </n-text>
      </n-h2>

      <n-ol>
        <n-li
          v-for="tool in tools"
          :key="tool"
        >
          <n-text>{{ tool }}</n-text>
        </n-li>
      </n-ol>
    </section>
  </n-space>
</template>

<script setup lang="ts">
  import { NH1, NH2, NText, NP, NSpace, NOl, NLi } from 'naive-ui'

  const tools = ['ESLint', 'Stylelint', 'Prettier', 'Husky', 'Lint-staged']
</script>
