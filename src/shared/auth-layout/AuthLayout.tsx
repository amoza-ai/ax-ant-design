import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './auth-layout.scss'

const { Content } = Layout

export function AuthLayout() {
  const { t } = useTranslation()

  return (
    <Layout className="auth-layout">
      <Content className="auth-layout__content">
        <div className="auth-layout__brand">{t('app.name')}</div>
        <div className="auth-layout__card">
          <Outlet />
        </div>
      </Content>
    </Layout>
  )
}
