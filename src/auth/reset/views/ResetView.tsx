import { observer } from 'mobx-react-lite'
import { Button, Form, Input, Typography } from 'antd'
import { useTranslation } from 'react-i18next'

export const ResetView = observer(function ResetView() {
  const { t } = useTranslation()

  return (
    <>
      <Typography.Title level={3}>{t('auth.reset')}</Typography.Title>
      <Form layout="vertical">
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Button type="primary" block>
          {t('auth.reset')}
        </Button>
      </Form>
    </>
  )
})
