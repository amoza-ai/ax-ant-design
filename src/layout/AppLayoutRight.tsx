import { Flex, Layout, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { AxActionIcon } from '../shared/action-icon/AxActionIcon.tsx'
import { AxMuiIcon } from '../shared/mui-icon/AxMuiIcon.tsx'

export const AppLayoutRight = observer(() => {
  return (
    <Layout.Sider width={40}>
      <Flex align="center" justify="space-between" gap="small" vertical style={{ width: '100%', height: '100%', paddingTop: '2px' }}>
        <Flex align="center" justify="start" gap="small" vertical style={{ width: '100%' }}>
          <Space size={8} vertical>
            <AxActionIcon icon={<AxMuiIcon icon="mdiBookOpenOutline" />} title={'Split View'} placement="left" onClick={() => console.log('click')} />
            <AxActionIcon icon={<AxMuiIcon icon="mdiCreationOutline" />} title={'Generative AI'} placement="left" onClick={() => console.log('click')} />
          </Space>
        </Flex>
        <Flex align="center" justify="end" gap="small" vertical style={{ width: '100%' }}>
          <Space size={8} vertical>
            <AxActionIcon icon={<AxMuiIcon icon="mdiProgressStarFourPoints" />} title={'Progress'} placement="left" onClick={() => console.log('click')} />
          </Space>
        </Flex>
      </Flex>
    </Layout.Sider>
  )
})
