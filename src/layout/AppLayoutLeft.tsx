import { Divider, Flex, Layout, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { IconAction } from '../shared/icon-action/IconAction.tsx'

import DnsOutlineIcon from 'mdi-react/DnsOutlineIcon'
import InboxFullOutlineIcon from 'mdi-react/InboxFullOutlineIcon'
import CardTextOutlineIcon from 'mdi-react/CardTextOutlineIcon'

import SourceCommitIcon from 'mdi-react/SourceCommitIcon'
import SourcePullIcon from 'mdi-react/SourcePullIcon'
import SourceBranchIcon from 'mdi-react/SourceBranchIcon'

import CalendarMonthOutlineIcon from 'mdi-react/CalendarMonthOutlineIcon'
import HubOutlineIcon from 'mdi-react/HubOutlineIcon'
import MessageTextOutlineIcon from 'mdi-react/MessageTextOutlineIcon'

import ConsoleIcon from 'mdi-react/ConsoleIcon'
import TrayFullIcon from 'mdi-react/TrayFullIcon'

export const AppLayoutLeft = observer(() => {
  return (
    <Layout.Sider width={40}>
      <Flex align="center" justify="space-between" gap="small" vertical style={{ width: '100%', height: '100%', padding: '2px 4px' }}>
        <Flex align="center" justify="start" gap="small" vertical style={{ width: '100%' }}>
          <Space vertical size={8}>
            <IconAction icon={<DnsOutlineIcon />} title={'Project'} placement="right" onClick={() => console.log('click')} />
            <IconAction icon={<InboxFullOutlineIcon />} title={'Inbox'} placement="right" onClick={() => console.log('click')} />
            <IconAction icon={<CardTextOutlineIcon />} title={'Task'} placement="right" onClick={() => console.log('click')} />
          </Space>
          <Divider style={{ margin: '0' }} />
          <Space vertical size={8}>
            <IconAction icon={<SourceCommitIcon />} title={'Commit'} placement="right" onClick={() => console.log('click')} />
            <IconAction icon={<SourcePullIcon />} title={'Pull Request'} placement="right" onClick={() => console.log('click')} />
            <IconAction icon={<SourceBranchIcon />} title={'Branch'} placement="right" onClick={() => console.log('click')} />
          </Space>
          <Divider style={{ margin: '0' }} />
          <Space vertical size={8}>
            <IconAction icon={<CalendarMonthOutlineIcon />} title={'Calendar'} placement="right" onClick={() => console.log('click')} />
            <IconAction icon={<HubOutlineIcon />} title={'Channel'} placement="right" onClick={() => console.log('click')} />
            <IconAction icon={<MessageTextOutlineIcon />} title={'Chat'} placement="right" onClick={() => console.log('click')} />
          </Space>
        </Flex>
        <Flex align="center" justify="start" gap="small" vertical style={{ width: '100%' }}>
          <Space vertical size={8}>
            <IconAction icon={<TrayFullIcon />} title={'Output'} placement="right" onClick={() => console.log('click')} />
            <IconAction icon={<ConsoleIcon />} title={'Console'} placement="right" onClick={() => console.log('click')} />
          </Space>
        </Flex>
      </Flex>
    </Layout.Sider>
  )
})
