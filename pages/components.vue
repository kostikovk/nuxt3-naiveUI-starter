<template>
  <div>
    <NH1>
      <NText type="primary"> Naive UI </NText>
    </NH1>
    <NTypo />
    <NProvidered />
  </div>
</template>

<script setup lang="ts">
  import { NH1, NText } from 'naive-ui'
  import NProvidered from '~~/components/examples/n-providered.vue'
  import NTypo from '~~/components/examples/n-typo.vue'
</script>
