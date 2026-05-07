import type { ThemeConfig } from 'antd'

export const axColors = {
  primary: '#3F51B5',
  secondary: '#009688',
  tertiary: '#673AB7',
  error: '#F44336',
  warning: '#FF9800',
  info: '#2196F3',
  success: '#4CAF50',
} as const

export const axFontFamily = `'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

export const axTheme: ThemeConfig = {
  token: {
    colorPrimary: axColors.primary,
    colorInfo: axColors.info,
    colorSuccess: axColors.success,
    colorWarning: axColors.warning,
    colorError: axColors.error,
    fontFamily: axFontFamily,
  },
}
