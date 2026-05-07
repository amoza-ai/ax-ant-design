import type { ThemeConfig } from 'antd'

export const axColors = {
  primary: '#3F51B5',
  secondary: '#009688',
  tertiary: '#673AB7',

  error: '#F44336',
  warning: '#FF9800',
  info: '#2196F3',
  success: '#4CAF50',

  body: '#bfbfbf',
  panel: '#f5f5f5',
  action: '#434343',
} as const

export const axFontFamily = `'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

export const axTheme: ThemeConfig = {
  token: {
    colorPrimary: axColors.primary,
    fontFamily: axFontFamily,
  },
  components: {
    Layout: {
      headerHeight: 40,
      headerPadding: '0 4px',
      footerPadding: '0 44px',
      bodyBg: axColors.body,
      headerBg: axColors.body,
      footerBg: axColors.body,
      siderBg: axColors.body,
    },
    Splitter: {
      splitBarSize: 2,
    },
  },
}
