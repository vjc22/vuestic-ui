import { GlobalConfig } from 'vuestic-ui/src/main'
import { icons } from './icons-config/icons-config'

const scrollWrapperSelector = '.base-layout__content'

export const VuesticConfig: GlobalConfig = {
  icons,
  components: {
    VaParallax: {
      target: scrollWrapperSelector,
    },
    VaDropdown: {
      target: scrollWrapperSelector,
    },
  },
}
