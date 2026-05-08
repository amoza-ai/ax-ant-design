import { observer } from 'mobx-react-lite'
import { cloneElement, type ReactElement } from 'react'
import { Tooltip } from 'antd'
import type { TooltipPlacement } from 'antd/es/tooltip'

export type IconActionProps = {
  icon: ReactElement
  title?: string
  placement?: TooltipPlacement
  onClick?: () => void
}

export const IconAction = observer((props: IconActionProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const myIcon = cloneElement(props.icon, { size: '20px', className: 'ax-icon-action_icon' })
  return (
    <Tooltip title={props.title} placement={props.placement}>
      <button className="ax-icon-action" onClick={props.onClick}>
        {myIcon}
      </button>
    </Tooltip>
  )
})
