import { ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import { StoreContext } from './shared/store/store.context'
import { rootStore } from './shared/store/root.store'
import { router } from './router'
import { axTheme } from './styles/theme'
import './i18n'

function App() {
  return (
    <StoreContext.Provider value={rootStore}>
      <ConfigProvider theme={axTheme}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </StoreContext.Provider>
  )
}

export default App
