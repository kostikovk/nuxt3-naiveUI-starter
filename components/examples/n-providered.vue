<template>
  <NH2>
    <NText type="info"> Provider Components </NText>
  </NH2>

  <NSpace>
    <NButton @click="cbInfo"> useMessage </NButton>
    <NButton @click="cbNotification"> useNotification </NButton>
    <NButton @click="cbDialog"> useDialog </NButton>
    <NButton @click="cbLoadingBar"> useLoadingBar </NButton>
  </NSpace>
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
