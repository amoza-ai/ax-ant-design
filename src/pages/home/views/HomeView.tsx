import { observer } from 'mobx-react-lite'
import { Typography } from 'antd'
import { useTranslation } from 'react-i18next'

export const HomeView = observer(function HomeView() {
  const { t } = useTranslation()
  return (
    <div style={{ height: '100%', width: '100%', margin: 0, padding: 0, position: 'relative', overflow: 'hidden', background: '#fff', borderRadius: 8 }}>
      <Typography.Title level={2}>{t('nav.home')}</Typography.Title>
      <Typography.Paragraph>{t('app.tagline')}</Typography.Paragraph>
    </div>
  )
})
