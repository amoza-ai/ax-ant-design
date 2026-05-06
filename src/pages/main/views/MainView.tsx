import { observer } from 'mobx-react-lite'
import { Typography } from 'antd'
import { useTranslation } from 'react-i18next'

export const MainView = observer(function MainView() {
  const { t } = useTranslation()
  return (
    <>
      <Typography.Title level={2}>{t('nav.main')}</Typography.Title>
    </>
  )
})
