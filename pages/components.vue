<template>
  <div>
    <NH1>
      <NText type="primary"> Naive UI </NText>
    </NH1>

    <TypographyComponents />

    <ProvidedComponents />
  </div>
</template>

<script setup lang="ts">
import { NH1, NText } from "naive-ui";

import ProvidedComponents from "~~/components/examples/ProvidedComponents.vue";
import TypographyComponents from "~~/components/examples/TypographyComponents.vue";
</script>

<style scoped></style>
