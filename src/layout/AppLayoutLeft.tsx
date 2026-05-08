import { Divider, Flex, Layout, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { AxActionIcon } from '../shared/action-icon/AxActionIcon.tsx'
import { AxMuiIcon } from '../shared/mui-icon/AxMuiIcon.tsx'

export const AppLayoutLeft = observer(() => {
  return (
    <Layout.Sider width={40}>
      <Flex align="center" justify="space-between" gap="small" vertical style={{ width: '100%', height: '100%', padding: '2px 4px' }}>
        <Flex align="center" justify="start" gap="small" vertical style={{ width: '100%' }}>
          <Space vertical size={8}>
            <AxActionIcon icon={<AxMuiIcon icon="mdiDnsOutline" />} title={'Project'} placement="right" onClick={() => console.log('click')} />
            <AxActionIcon icon={<AxMuiIcon icon="mdiInboxFullOutline" />} title={'Inbox'} placement="right" onClick={() => console.log('click')} />
            <AxActionIcon icon={<AxMuiIcon icon="mdiCardTextOutline" />} title={'Task'} placement="right" onClick={() => console.log('click')} />
          </Space>
          <Divider style={{ margin: '0' }} />
          <Space vertical size={8}>
            <AxActionIcon icon={<AxMuiIcon icon="mdiSourceCommit" />} title={'Commit'} placement="right" onClick={() => console.log('click')} />
            <AxActionIcon icon={<AxMuiIcon icon="mdiSourcePull" />} title={'Pull Request'} placement="right" onClick={() => console.log('click')} />
            <AxActionIcon icon={<AxMuiIcon icon="mdiSourceBranch" />} title={'Branch'} placement="right" onClick={() => console.log('click')} />
          </Space>
          <Divider style={{ margin: '0' }} />
          <Space vertical size={8}>
            <AxActionIcon icon={<AxMuiIcon icon="mdiCalendarMonthOutline" />} title={'Calendar'} placement="right" onClick={() => console.log('click')} />
            <AxActionIcon icon={<AxMuiIcon icon="mdiHubOutline" />} title={'Channel'} placement="right" onClick={() => console.log('click')} />
            <AxActionIcon icon={<AxMuiIcon icon="mdiMessageTextOutline" />} title={'Chat'} placement="right" onClick={() => console.log('click')} />
          </Space>
        </Flex>
        <Flex align="center" justify="start" gap="small" vertical style={{ width: '100%' }}>
          <Space vertical size={8}>
            <AxActionIcon icon={<AxMuiIcon icon="mdiTrayFull" />} title={'Output'} placement="right" onClick={() => console.log('click')} />
            <AxActionIcon icon={<AxMuiIcon icon="mdiConsole" />} title={'Console'} placement="right" onClick={() => console.log('click')} />
          </Space>
        </Flex>
      </Flex>
    </Layout.Sider>
  )
})
