import { observer } from 'mobx-react-lite'
import { ConfigProvider, Splitter } from 'antd'
import { createStyles } from 'antd-style'
import { DisplayPanel } from './views/DisplayPanel.tsx'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = createStyles(({ token }) => ({
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
          Splitter: { splitBarSize: 2, splitTriggerSize: 16 },
        },
      }}
    >
      <Splitter
        style={{ height: '100%', width: '100%' }}
        vertical
        draggerIcon={null}
        classNames={{ dragger: { default: styles.dragger, active: styles.draggerActive } }}
      >
        <Splitter.Panel defaultSize="75%" min="20%" max="90%">
          <Splitter draggerIcon={null} classNames={{ dragger: { default: styles.dragger, active: styles.draggerActive } }}>
            <Splitter.Panel defaultSize="15%" min="10%" max="80%">
              <DisplayPanel />
            </Splitter.Panel>
            <Splitter.Panel defaultSize="70%" min="10%" max="80%">
              <DisplayPanel />
            </Splitter.Panel>
            <Splitter.Panel defaultSize="15%" min="10%" max="80%">
              <DisplayPanel />
            </Splitter.Panel>
          </Splitter>
        </Splitter.Panel>
        <Splitter.Panel defaultSize="25%" min="10%" max="80%">
          <DisplayPanel />
        </Splitter.Panel>
      </Splitter>
    </ConfigProvider>
  )
})
