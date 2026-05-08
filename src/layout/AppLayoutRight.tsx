import { Flex, Layout, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { IconAction } from '../shared/icon-action/IconAction.tsx'

import BookOpenOutlineIcon from 'mdi-react/BookOpenOutlineIcon'
import CreationOutlineIcon from 'mdi-react/CreationOutlineIcon'
import ProgressStarFourPointsIcon from 'mdi-react/ProgressStarFourPointsIcon'

export const AppLayoutRight = observer(() => {
  return (
    <Layout.Sider width={40}>
      <Flex align="center" justify="space-between" gap="small" vertical style={{ width: '100%', height: '100%', paddingTop: '2px' }}>
        <Flex align="center" justify="start" gap="small" vertical style={{ width: '100%' }}>
          <Space size={8} vertical>
            <IconAction icon={<BookOpenOutlineIcon />} title={'Split View'} placement="left" onClick={() => console.log('click')} />
            <IconAction icon={<CreationOutlineIcon />} title={'Generative AI'} placement="left" onClick={() => console.log('click')} />
          </Space>
        </Flex>
        <Flex align="center" justify="end" gap="small" vertical style={{ width: '100%' }}>
          <Space size={8} vertical>
            <IconAction icon={<ProgressStarFourPointsIcon />} title={'Progress'} placement="left" onClick={() => console.log('click')} />
          </Space>
        </Flex>
      </Flex>
    </Layout.Sider>
  )
})
