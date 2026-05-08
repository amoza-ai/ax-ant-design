import { Avatar, Divider, Flex, Layout, Space, Tooltip } from 'antd'
import { observer } from 'mobx-react-lite'
import { IconAction } from '../shared/icon-action/IconAction.tsx'

import avatarLight from '../assets/avatar-light.png'

import HomeLightningBoltOutlineIcon from 'mdi-react/HomeLightningBoltOutlineIcon'

import CogIcon from 'mdi-react/CogIcon'
import MenuIcon from 'mdi-react/MenuIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import BellOutlineIcon from 'mdi-react/BellOutlineIcon'
import AccountCircleOutlineIcon from 'mdi-react/AccountCircleOutlineIcon'

export const AppLayoutTop = observer(() => {
  return (
    <Layout.Header className="ax-layout-top">
      <Flex align="center" justify="space-between" gap="small" style={{ height: '100%' }}>
        <Flex align="center" justify="start" gap="small">
          <Space>
            <Flex align="center" justify="center" style={{ width: '32px', height: '32px' }}>
              <Tooltip title="AMAI - Amoza AI Assistant" placement="bottomLeft">
                <Avatar size={24} src={<img draggable={false} src={avatarLight} alt="avatar" />} />
              </Tooltip>
            </Flex>
          </Space>
          <Divider vertical style={{ height: '28px' }} />
          <Space size={8}>
            <IconAction icon={<HomeLightningBoltOutlineIcon />} title={'Home'} placement="bottom" onClick={() => console.log('click')} />
            <IconAction icon={<MenuIcon />} title={'Menu'} placement="bottom" onClick={() => console.log('click')} />
          </Space>
        </Flex>
        <Flex align="center" justify="end" gap="small">
          <Space size={8}>
            <IconAction icon={<MagnifyIcon />} title={'Global Search'} placement="bottom" onClick={() => console.log('click')} />
            <IconAction icon={<AccountCircleOutlineIcon />} title={'User Account'} placement="bottom" onClick={() => console.log('click')} />
            <IconAction icon={<BellOutlineIcon />} title={'Notifications'} placement="bottomRight" onClick={() => console.log('click')} />
            <IconAction icon={<CogIcon />} title={'System Settings'} placement="bottomRight" onClick={() => console.log('click')} />
          </Space>
        </Flex>
      </Flex>
    </Layout.Header>
  )
})
