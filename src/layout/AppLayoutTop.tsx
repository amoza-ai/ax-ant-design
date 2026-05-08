import { Button, Flex, Layout, Space, Tooltip } from 'antd'
import { observer } from 'mobx-react-lite'

import { RobotOutlined, SettingOutlined } from '@ant-design/icons'

import AlertIcon from 'mdi-react/AlertIcon'

export const AppLayoutTop = observer(() => {
  return (
    <Layout.Header className="ax-layout-top">
      <Flex align="center" justify="space-between" gap="small">
        <Flex align="center" justify="start" gap="small">
          <Space>
            <Tooltip title="Action Title" autoAdjustOverflow>
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
            <Tooltip title="Action Title" autoAdjustOverflow>
              <Button type="text" icon={<AlertIcon />} />
            </Tooltip>
            <Tooltip title="Action Title" autoAdjustOverflow>
              <Button type="text" icon={<SettingOutlined />} />
            </Tooltip>
          </Space>
        </Flex>
      </Flex>
    </Layout.Header>
  )
})
