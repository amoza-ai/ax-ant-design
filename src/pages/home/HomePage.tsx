import { observer } from 'mobx-react-lite'
import { ConfigProvider, Splitter } from 'antd'
import { createStyles } from 'antd-style'
import { DisplayPanel } from './views/DisplayPanel.tsx'

const useStyles = createStyles(() => ({
  dragger: {
    '&::before': {
      background: '#bfbfbf !important',
    },
    '&:hover::before': {
      background: '#bfbfbf !important',
    },
  },
  draggerActive: {
    '&::before': {
      background: '#bfbfbf !important',
    },
  },
}))

export const HomePage = observer(() => {
  const { styles } = useStyles()

  return (
    <ConfigProvider
      theme={{
        components: {
          Splitter: { splitBarSize: 4, splitTriggerSize: 16 },
        },
      }}
    >
      <Splitter
        draggerIcon={null}
        style={{ height: '100%', width: '100%' }}
        classNames={{ dragger: { default: styles.dragger, active: styles.draggerActive } }}
      >
        <Splitter.Panel style={{ padding: 0, paddingRight: '2px' }} defaultSize="75%" min="20%" max="90%">
          <Splitter vertical draggerIcon={null} classNames={{ dragger: { default: styles.dragger, active: styles.draggerActive } }}>
            <Splitter.Panel style={{ padding: 0, paddingBottom: '2px' }} defaultSize="75%" min="15%" max="85%">
              <Splitter draggerIcon={null} classNames={{ dragger: { default: styles.dragger, active: styles.draggerActive } }}>
                <Splitter.Panel style={{ padding: 0, paddingRight: '2px' }} defaultSize="15%" min="10%" max="80%">
                  <DisplayPanel />
                </Splitter.Panel>
                <Splitter.Panel style={{ padding: 0, paddingLeft: '2px' }} defaultSize="70%" min="10%" max="80%">
                  <DisplayPanel />
                </Splitter.Panel>
              </Splitter>
            </Splitter.Panel>
            <Splitter.Panel style={{ padding: 0, paddingTop: '2px' }} defaultSize="25%" min="15%" max="85%">
              <DisplayPanel />
            </Splitter.Panel>
          </Splitter>
        </Splitter.Panel>
        <Splitter.Panel style={{ padding: 0, paddingLeft: '2px' }} defaultSize="25%" min="10%" max="80%">
          <Splitter vertical draggerIcon={null} classNames={{ dragger: { default: styles.dragger, active: styles.draggerActive } }}>
            <Splitter.Panel style={{ padding: 0, paddingBottom: '2px' }} defaultSize="50%" min="15%" max="85%">
              <DisplayPanel />
            </Splitter.Panel>
            <Splitter.Panel style={{ padding: 0, paddingTop: '2px' }} defaultSize="50%" min="15%" max="85%">
              <DisplayPanel />
            </Splitter.Panel>
          </Splitter>
        </Splitter.Panel>
      </Splitter>
    </ConfigProvider>
  )
})
