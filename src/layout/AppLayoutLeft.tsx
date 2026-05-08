import { Divider, Flex, Layout, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { IconAction } from '../shared/icon-action/IconAction.tsx'
import CogIcon from 'mdi-react/CogIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import AccountCircleOutlineIcon from 'mdi-react/AccountCircleOutlineIcon'
import BellOutlineIcon from 'mdi-react/BellOutlineIcon'

export const AppLayoutLeft = observer(() => {
  return (
    <Layout.Sider width={40}>
      <Flex align="center" justify="space-between" gap="small" vertical style={{ width: '100%', height: '100%', padding: '4px' }}>
        <Flex align="center" justify="start" gap="small" vertical style={{ width: '100%' }}>
          <Space vertical size={8}>
            <IconAction icon={<CogIcon />} title={'System Settings'} placement="right" onClick={() => console.log('click')} />
            <IconAction icon={<MagnifyIcon />} title={'Global Search'} placement="right" onClick={() => console.log('click')} />
            <IconAction icon={<AccountCircleOutlineIcon />} title={'User Account'} placement="right" onClick={() => console.log('click')} />
            <IconAction icon={<BellOutlineIcon />} title={'Notifications'} placement="right" onClick={() => console.log('click')} />
            <IconAction icon={<CogIcon />} title={'System Settings'} placement="right" onClick={() => console.log('click')} />
          </Space>
          <Divider style={{ margin: '0' }} />
          <Space vertical size={8}>
            <IconAction icon={<CogIcon />} title={'System Settings'} placement="right" onClick={() => console.log('click')} />
            <IconAction icon={<MagnifyIcon />} title={'Global Search'} placement="right" onClick={() => console.log('click')} />
            <IconAction icon={<AccountCircleOutlineIcon />} title={'User Account'} placement="right" onClick={() => console.log('click')} />
            <IconAction icon={<BellOutlineIcon />} title={'Notifications'} placement="right" onClick={() => console.log('click')} />
            <IconAction icon={<CogIcon />} title={'System Settings'} placement="right" onClick={() => console.log('click')} />
          </Space>
        </Flex>
      </Flex>
    </Layout.Sider>
  )
})
