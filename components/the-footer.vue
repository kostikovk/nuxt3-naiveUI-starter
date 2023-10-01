<template>
  <NLayoutFooter bordered>
    <div class="container">
      <NP>
        <NA
          href="https://nuxt.com/"
          target="_blank"
        >
          Nuxt 3
        </NA>
        +
        <NA
          href="https://www.naiveui.com"
          target="_blank"
        >
          NaiveUI
        </NA>
      </NP>
    </div>
  </NLayoutFooter>
</template>

<script setup lang="ts">
  import { NP, NLayoutFooter, NA } from 'naive-ui'
</script>

<style lang="scss" scoped>
  .n-layout-footer {
    padding: 16px 0;
    text-align: center;
  }
</style>
