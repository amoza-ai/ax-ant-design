import { observer } from 'mobx-react-lite'
import { cloneElement, type ReactElement } from 'react'
import { Tooltip } from 'antd'
import type { TooltipPlacement } from 'antd/es/tooltip'

export type AxActionIconProps = {
  icon: ReactElement
  title?: string
  placement?: TooltipPlacement
  onClick?: () => void
}

export const AxActionIcon = observer((props: AxActionIconProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const myIcon = cloneElement(props.icon, { size: '20px', className: 'ax-action-icon_icon' })
  return (
    <Tooltip title={props.title} placement={props.placement}>
      <button className="ax-action-icon" onClick={props.onClick}>
        {myIcon}
      </button>
    </Tooltip>
  )
})
