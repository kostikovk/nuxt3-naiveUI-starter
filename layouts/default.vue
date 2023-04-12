<template>
  <NLayout
    class="root-layout"
    position="absolute"
  >
    <TheHeader />

    <NLayoutContent>
      <div class="container p-y">
        <slot name="default" />
      </div>
    </NLayoutContent>

    <TheFooter />
  </NLayout>
</template>

<script setup lang="ts">
  import { NLayout, NLayoutContent } from 'naive-ui'
</script>

<style lang="scss" scoped>
  .p-y {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .root-layout {
    > :deep(.n-layout-scroll-container) {
      display: flex;
      flex-direction: column;

      @include overflow(hidden, auto);
    }

    .n-layout-content {
      flex: 1 1 auto;
    }
  }
</style>
