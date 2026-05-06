import { observer } from 'mobx-react-lite'
import { Typography } from 'antd'
import { useTranslation } from 'react-i18next'

export const HomeView = observer(function HomeView() {
  const { t } = useTranslation()
  return (
    <>
      <Typography.Title level={2}>{t('nav.home')}</Typography.Title>
      <Typography.Paragraph>{t('app.tagline')}</Typography.Paragraph>
    </>
  )
})
