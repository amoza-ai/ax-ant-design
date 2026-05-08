import { Flex, Layout, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { AxBreadcrumb } from '../shared/breadcrumb/AxBreadcrumb.tsx'
import { AxIconBox } from '../shared/icon-box/AxIconBox.tsx'
import { AxChatItem } from '../shared/chat-item/AxChatItem.tsx'

export const AppLayoutBottom = observer(() => {
  return (
    <Layout.Footer>
      <Flex align="center" justify="space-between" gap="small" style={{ height: '40px' }}>
        <Flex align="center" justify="start" gap="small">
          <AxBreadcrumb icon="mdiCardTextOutline" label="aPlanner" />
          <AxIconBox icon="mdiChevronRight" />
          <AxBreadcrumb icon="mdiCardTextOutline" label="Discover" />
          <AxIconBox icon="mdiChevronRight" />
          <AxBreadcrumb icon="mdiCardTextOutline" label="Planning" />
          <AxIconBox icon="mdiChevronRight" />
          <AxBreadcrumb icon="mdiCardTextOutline" label="Objectives & Plan" />
        </Flex>
        <Flex align="center" justify="end" gap="small">
          <Space>
            <AxChatItem name="Logan Ng - CPO" count={3} title={`Logan Ng - CPO: 3 messages`} />
            <AxChatItem name="Logan Ng - CPO" count={3} title={`Logan Ng - CPO: 3 messages`} />
            <AxChatItem name="Logan Ng - CPO" count={3} title={`Logan Ng - CPO: 3 messages`} />
            <AxChatItem name="Logan Ng - CPO" count={3} title={`Logan Ng - CPO: 3 messages`} />
          </Space>
        </Flex>
      </Flex>
    </Layout.Footer>
  )
})
