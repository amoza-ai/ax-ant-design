import { Button, Flex, Layout, Space, Tooltip } from 'antd'
import { observer } from 'mobx-react-lite'
import { RobotOutlined } from '@ant-design/icons'

export const AppLayoutLeft = observer(() => {
  return (
    <Layout.Sider width={40}>
      <Flex align="center" justify="center" gap="small" vertical>
        <Space vertical>
          <Tooltip title="Action Title">
            <Button type="text" icon={<RobotOutlined style={{ fontSize: '20px' }} />} />
          </Tooltip>
          <Tooltip title="Action Title">
            <Button type="text" icon={<RobotOutlined style={{ fontSize: '20px' }} />} />
          </Tooltip>
        </Space>
        <Space vertical>
          <Tooltip title="Action Title">
            <Button type="text" icon={<RobotOutlined style={{ fontSize: '20px' }} />} />
          </Tooltip>
          <Tooltip title="Action Title">
            <Button type="text" icon={<RobotOutlined style={{ fontSize: '20px' }} />} />
          </Tooltip>
        </Space>
      </Flex>
    </Layout.Sider>
  )
})
