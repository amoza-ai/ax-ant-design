import { observer } from 'mobx-react-lite'
import { cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react'
import { AxMuiIcon } from '../mui-icon/AxMuiIcon.tsx'
import { Flex } from 'antd'

export type AxSimplePanelProps = {
  icon: string | ReactElement
  title: string
  children?: ReactNode
}

export const AxSimplePanel = observer((props: AxSimplePanelProps) => {
  const myIcon = isValidElement(props.icon) ? (
    cloneElement(props.icon, { size: '20px', className: 'ax-simple-panel_header_title_icon' } as never)
  ) : (
    <AxMuiIcon icon={props.icon} size="20px" className="ax-simple-panel_header_title_icon" />
  )
  return (
    <Flex vertical align="center" justify="space-between" className="ax-simple-panel">
      <Flex align="center" justify="space-between" className="ax-simple-panel_header">
        <Flex align="center" justify="start" className="ax-simple-panel_header_title" gap="small">
          {myIcon}
          <p className="ax-simple-panel_header_title_text">{props.title}</p>
        </Flex>
        <Flex align="center" justify="end" className="ax-simple-panel_header_option" gap="small">
          <button className="ax-simple-panel_header_option_button">
            <AxMuiIcon icon="mdiDotsVertical" size="12px" className="ax-simple-panel_header_title_icon" />
          </button>
        </Flex>
      </Flex>
      <div className="ax-simple-panel_body">{props.children}</div>
    </Flex>
  )
})
