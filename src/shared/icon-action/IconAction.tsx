import { observer } from 'mobx-react-lite'
import type { ReactElement } from 'react'
import { Tooltip } from 'antd'
import type { TooltipPlacement } from 'antd/es/tooltip'

export type IconActionProps = {
  icon: ReactElement
  title?: string
  placement?: TooltipPlacement
  onClick?: () => void
}

export const IconAction = observer((props: IconActionProps) => {
  return (
    <Tooltip title={props.title} placement={props.placement}>
      <button className="ax-icon-action" onClick={props.onClick}>
        {props.icon}
      </button>
    </Tooltip>
  )
})
