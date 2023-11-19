<template>
  <NSpace
    vertical
    size="large"
  >
    <section>
      <NH1 prefix="bar">
        <NText type="primary"> Nuxt 3 + NaiveUI Starter </NText>
      </NH1>

      <NP>
        Starter kit for developing projects with
        <NText type="primary"> Nuxt 3 </NText>
        and
        <NText type="primary"> NaiveUI </NText>
      </NP>

      <NH2>
        <NText type="primary"> Tools: </NText>
      </NH2>

      <NOl>
        <NLi
          v-for="tool in tools"
          :key="tool"
        >
          <NText>{{ tool }}</NText>
        </NLi>
      </NOl>
    </section>
  </NSpace>
</template>

<script setup lang="ts">
  import { NH1, NH2, NText, NP, NSpace, NOl, NLi } from 'naive-ui'

  const tools = ['ESLint', 'Stylelint', 'Prettier', 'Husky', 'Lint-staged', 'Pinia']
</script>
