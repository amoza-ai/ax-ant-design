import { Layout, Menu } from 'antd'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './app-layout.scss'

const { Header, Content, Footer } = Layout

export function AppLayout() {
  const { t } = useTranslation()
  const location = useLocation()

  const items = [
    { key: '/', label: <Link to="/">{t('nav.home')}</Link> },
    { key: '/main', label: <Link to="/main">{t('nav.main')}</Link> },
  ]

  return (
    <Layout className="app-layout">
      <Header className="app-layout__header">
        <div className="app-layout__brand">{t('app.name')}</div>
        <Menu
          mode="horizontal"
          theme="dark"
          selectedKeys={[location.pathname]}
          items={items}
          className="app-layout__menu"
        />
      </Header>
      <Content className="app-layout__content">
        <Outlet />
      </Content>
      <Footer className="app-layout__footer">{t('app.tagline')}</Footer>
    </Layout>
  )
}
