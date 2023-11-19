import { h, type FunctionalComponent } from 'vue'
import {
  NConfigProvider,
  NMessageProvider,
  NNotificationProvider,
  NDialogProvider,
  NLoadingBarProvider,
  type ConfigProviderProps
} from 'naive-ui'

const AppProviders: FunctionalComponent<ConfigProviderProps> = (props, { slots }) => {
  return h(NConfigProvider, props, () =>
    h(NMessageProvider, null, () =>
      h(NNotificationProvider, null, () =>
        h(NDialogProvider, null, () => h(NLoadingBarProvider, null, () => slots.default?.()))
      )
    )
  )
}

export default AppProviders
