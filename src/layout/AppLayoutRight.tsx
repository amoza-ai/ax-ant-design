import { Flex, Layout, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { IconAction } from '../shared/icon-action/IconAction.tsx'

import CogIcon from 'mdi-react/CogIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import BellOutlineIcon from 'mdi-react/BellOutlineIcon'
import AccountCircleOutlineIcon from 'mdi-react/AccountCircleOutlineIcon'

export const AppLayoutRight = observer(() => {
  return (
    <Layout.Sider width={40}>
      <Flex align="center" justify="space-between" gap="small" vertical style={{ width: '100%', height: '100%', padding: '4px 0' }}>
        <Flex align="center" justify="start" gap="small" vertical style={{ width: '100%' }}>
          <Space size={8} vertical>
            <IconAction icon={<CogIcon />} title={'System Settings'} placement="left" onClick={() => console.log('click')} />
            <IconAction icon={<MagnifyIcon />} title={'Global Search'} placement="left" onClick={() => console.log('click')} />
            <IconAction icon={<AccountCircleOutlineIcon />} title={'User Account'} placement="left" onClick={() => console.log('click')} />
            <IconAction icon={<BellOutlineIcon />} title={'Notifications'} placement="left" onClick={() => console.log('click')} />
            <IconAction icon={<CogIcon />} title={'System Settings'} placement="left" onClick={() => console.log('click')} />
          </Space>
        </Flex>
      </Flex>
    </Layout.Sider>
  )
})
