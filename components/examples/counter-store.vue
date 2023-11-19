<script setup lang="ts">
  import { useCounterStore } from '~/store'
  import { NButton } from 'naive-ui'
  const counterStore = useCounterStore()
</script>

<template>
  <NButton
    type="primary"
    round
    @click="counterStore.increment"
  >
    State management pinia: {{ counterStore.count }}
  </NButton>
</template>
