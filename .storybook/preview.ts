import { theme } from './../src/styles/theme'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        theme,
      },
      defaultTheme: 'theme',
      Provider: ThemeProvider,
    }),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
