/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,scss}'],
  theme: {
    extend: {
      colors: {
        'ax-primary': '#3f51b5',
        'ax-secondary': '#009688',
        'ax-tertiary': '#673ab7',
        'ax-error': '#f44336',
        'ax-warning': '#ff9800',
        'ax-info': '#2196f3',
        'ax-success': '#4caf50',
      },
      fontFamily: {
        sans: ['Roboto', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      fontSize: {
        base: ['14px', '1.5'],
      },
    },
  },
  plugins: [],
}
