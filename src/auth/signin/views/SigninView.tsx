import { observer } from 'mobx-react-lite'
import { Button, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useStore } from '../../../acore/store/store.context'

export const SigninView = observer(function SigninView() {
  const { signin } = useStore()
  const { t } = useTranslation()

  return (
    <>
      <Typography.Title level={3}>{t('auth.signin')}</Typography.Title>
      <Form layout="vertical">
        <Form.Item label="Email">
          <Input value={signin.email} onChange={(e) => signin.setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password value={signin.password} onChange={(e) => signin.setPassword(e.target.value)} />
        </Form.Item>
        <Button type="primary" block loading={signin.loading}>
          {t('auth.signin')}
        </Button>
      </Form>
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <Link to="/auth/signup">{t('auth.signup')}</Link>
      </div>
    </>
  )
})
