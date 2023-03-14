import { useState } from '#app'
import { computed } from 'vue'
import { useOsTheme, darkTheme } from 'naive-ui'

type Theme = 'light' | 'dark'

export const useTheme = () => {
  const themeCookie = useCookie<Theme>('theme')
  const activeTheme = useState<Theme>('theme', () =>
    themeCookie.value ? themeCookie.value : useOsTheme().value ?? 'light'
  )

  const isDark = computed(() => activeTheme.value === 'dark')
  const naiveTheme = computed(() => (isDark.value ? darkTheme : null))

  const setTheme = (value: Theme) => {
    activeTheme.value = value
    themeCookie.value = value
  }

  const toggleTheme = () => (isDark.value ? setTheme('light') : setTheme('dark'))

  return { toggleTheme, isDark, activeTheme, naiveTheme }
}
