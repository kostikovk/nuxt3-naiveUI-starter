import { h, FunctionalComponent } from "vue";
import {
  NConfigProvider,
  NMessageProvider,
  NNotificationProvider,
  NDialogProvider,
  NLoadingBarProvider,
  ConfigProviderProps,
} from "naive-ui";

type Props = {
  configProvider?: ConfigProviderProps;
};

const NProviders: FunctionalComponent<Props> = (props, { slots }) => {
  return h(NConfigProvider, props.configProvider, () =>
    h(NMessageProvider, null, () =>
      h(NNotificationProvider, null, () =>
        h(NDialogProvider, null, () =>
          h(NLoadingBarProvider, null, () => slots.default?.())
        )
      )
    )
  );
};

NProviders.props = {
  configProvider: {
    type: Object as PropType<ConfigProviderProps>,
    default: () => ({}),
  },
};

export default NProviders;
