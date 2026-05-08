import { Avatar, Divider, Flex, Layout, Space, Tooltip } from 'antd'
import { observer } from 'mobx-react-lite'
import { AxMenuIcon } from '../shared/menu-icon/AxMenuIcon.tsx'

import avatarLight from '../assets/avatar-light.png'
import { AxMenuBox } from '../shared/menu-box/AxMenuBox.tsx'

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
            <AxMenuBox icon="mdiFolderOutline" label="aPlanner" />
            <AxMenuBox icon="mdiSourceBranch" label="Main" />
          </Space>
        </Flex>
        <Flex align="center" justify="end" gap="small">
          <Space size={8}>
            <AxMenuIcon icon="mdiMagnify" title={'System Settings'} placement="bottomRight" onClick={() => console.log('click')} />
            <AxMenuIcon icon="mdiBellOutline" title={'System Settings'} placement="bottomRight" onClick={() => console.log('click')} />
            <AxMenuIcon icon="mdiAccountCircleOutline" title={'System Settings'} placement="bottomRight" onClick={() => console.log('click')} />
            <AxMenuIcon icon="mdiCogOutline" title={'System Settings'} placement="bottomRight" onClick={() => console.log('click')} />
          </Space>
        </Flex>
      </Flex>
    </Layout.Header>
  )
})
