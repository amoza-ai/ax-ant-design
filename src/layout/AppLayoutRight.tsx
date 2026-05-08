import { Button, Flex, Layout, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { RobotOutlined } from '@ant-design/icons'

export const AppLayoutRight = observer(() => {
  return (
    <Layout.Sider width={40}>
      <Flex align="center" justify="center" gap="small" vertical>
        <Space vertical>
          <Button type="text" icon={<RobotOutlined style={{ fontSize: '20px', color: '#434343' }} />} />
          <Button type="text" icon={<RobotOutlined style={{ fontSize: '20px', color: '#434343' }} />} />
        </Space>
        <Space vertical>
          <Button type="text" icon={<RobotOutlined style={{ fontSize: '20px', color: '#434343' }} />} />
          <Button type="text" icon={<RobotOutlined style={{ fontSize: '20px', color: '#434343' }} />} />
        </Space>
      </Flex>
    </Layout.Sider>
  )
})
