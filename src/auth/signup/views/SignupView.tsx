import { observer } from 'mobx-react-lite'
import { Button, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const SignupView = observer(function SignupView() {
  const { t } = useTranslation()

  return (
    <>
      <Typography.Title level={3}>{t('auth.signup')}</Typography.Title>
      <Form layout="vertical">
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password />
        </Form.Item>
        <Form.Item label="Confirm password">
          <Input.Password />
        </Form.Item>
        <Button type="primary" block>
          {t('auth.signup')}
        </Button>
      </Form>
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <Link to="/auth/signin">{t('auth.signin')}</Link>
      </div>
    </>
  )
})
