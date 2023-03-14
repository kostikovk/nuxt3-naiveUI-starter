<template>
  <n-layout-footer bordered>
    <div class="container">
      <n-p>
        Made with
        <n-text type="error">♥</n-text>️ by KosKosovuch using
        <n-a href="https://nuxt.com/" target="_blank">Nuxt 3</n-a> +
        <n-a href="https://www.naiveui.com" target="_blank">NaiveUI</n-a>
      </n-p>
    </div>
  </n-layout-footer>
</template>

<script setup lang="ts">
import { NText, NP, NLayoutFooter, NA } from "naive-ui";
</script>

<style lang="scss" scoped>
.n-layout-footer {
  padding: 16px 0;
  text-align: center;
}
</style>
