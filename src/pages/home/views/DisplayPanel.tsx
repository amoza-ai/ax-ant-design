import { observer } from 'mobx-react-lite'
import { Card, ConfigProvider } from 'antd'

export const DisplayPanel = observer(() => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: { bodyPadding: 0, bodyPaddingSM: 0 },
        },
      }}
    >
      <Card variant="borderless" style={{ width: '100%', height: '100%' }}>
        sdfdsf
      </Card>
    </ConfigProvider>
  )
})
