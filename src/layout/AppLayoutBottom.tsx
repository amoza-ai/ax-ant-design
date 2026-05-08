import { Button, Flex, Layout, Space, Tooltip } from 'antd'
import { observer } from 'mobx-react-lite'
import { RobotOutlined } from '@ant-design/icons'
import { AxBreadcrumb } from '../shared/breadcrumb/AxBreadcrumb.tsx'
import { AxMuiIcon } from '../shared/mui-icon/AxMuiIcon.tsx'
import { AxIconBox } from '../shared/icon-box/AxIconBox.tsx'

export const AppLayoutBottom = observer(() => {
  return (
    <Layout.Footer>
      <Flex align="center" justify="space-between" gap="small" style={{ height: '40px' }}>
        <Flex align="center" justify="start" gap="small">
          <AxBreadcrumb icon={<AxMuiIcon icon="mdiCardTextOutline" />} label="aPlanner" />
          <AxIconBox icon={<AxMuiIcon icon="mdiChevronRight" />} />
          <AxBreadcrumb icon={<AxMuiIcon icon="mdiCardTextOutline" />} label="Discover" />
          <AxIconBox icon={<AxMuiIcon icon="mdiChevronRight" />} />
          <AxBreadcrumb icon={<AxMuiIcon icon="mdiCardTextOutline" />} label="Planning" />
          <AxIconBox icon={<AxMuiIcon icon="mdiChevronRight" />} />
          <AxBreadcrumb icon={<AxMuiIcon icon="mdiCardTextOutline" />} label="Objectives & Plan" />
        </Flex>
        <Flex align="center" justify="end" gap="small">
          <Space>
            <Tooltip title="Action Title">
              <Button type="text" icon={<RobotOutlined style={{ fontSize: '20px' }} />} />
            </Tooltip>
            <Tooltip title="Action Title">
              <Button type="text" icon={<RobotOutlined style={{ fontSize: '20px' }} />} />
            </Tooltip>
          </Space>
          <Space>
            <Tooltip title="Action Title">
              <Button type="text" icon={<RobotOutlined style={{ fontSize: '20px' }} />} />
            </Tooltip>
            <Tooltip title="Action Title">
              <Button type="text" icon={<RobotOutlined style={{ fontSize: '20px' }} />} />
            </Tooltip>
          </Space>
        </Flex>
      </Flex>
    </Layout.Footer>
  )
})
