import { observer } from 'mobx-react-lite'
import type { ReactNode } from 'react'
import { AxMuiIcon } from '../mui-icon/AxMuiIcon.tsx'

export type AxSimplePanelProps = {
  icon: string
  title: string
  children?: ReactNode
}

export const AxSimplePanel = observer((props: AxSimplePanelProps) => {
  return (
    <div className="ax-simple-panel">
      <div className="ax-simple-panel_header">
        <div className="ax-simple-panel_header_title">
          <div className="ax-simple-panel_header_title_icon">
            <AxMuiIcon icon={props.icon} size="20px" />
          </div>
          <div className="ax-simple-panel_header_title_text">{props.title}</div>
        </div>
      </div>
      <div className="ax-simple-panel_body">{props.children}</div>
    </div>
  )
})
