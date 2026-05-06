import { observer } from 'mobx-react-lite'
import { Button, Form, Input, Typography } from 'antd'
import { useTranslation } from 'react-i18next'

export const VerifyView = observer(function VerifyView() {
  const { t } = useTranslation()

  return (
    <>
      <Typography.Title level={3}>{t('auth.verify')}</Typography.Title>
      <Form layout="vertical">
        <Form.Item label="Code">
          <Input />
        </Form.Item>
        <Button type="primary" block>
          {t('auth.verify')}
        </Button>
      </Form>
    </>
  )
})
