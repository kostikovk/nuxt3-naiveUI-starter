<template>
  <n-h2>
    <n-text type="info"> Provider Components </n-text>
  </n-h2>

  <n-space>
    <n-button @click="cbInfo"> useMessage </n-button>
    <n-button @click="cbNotification"> useNotification </n-button>
    <n-button @click="cbDialog"> useDialog </n-button>
    <n-button @click="cbLoadingBar"> useLoadingBar </n-button>
  </n-space>
</template>

<script lang="ts" setup>
  import { useMessage, useNotification, useDialog, useLoadingBar, NButton, NSpace, NH2, NText } from 'naive-ui'

  const message = useMessage()
  const notification = useNotification()
  const dialog = useDialog()
  const loadingBar = useLoadingBar()

  const cbInfo = () => {
    message.info('message')
  }

  const cbNotification = () => {
    notification.info({ title: 'notification' })
  }

  const cbDialog = () => {
    dialog.info({ title: 'dialog' })
  }

  const cbLoadingBar = () => {
    loadingBar.start()

    const timeout = setTimeout(() => {
      loadingBar.finish()

      clearTimeout(timeout)
    }, 1000)
  }
</script>
