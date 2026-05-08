import { observer } from 'mobx-react-lite'
import { cloneElement, type ReactElement } from 'react'
import { Flex, Tooltip } from 'antd'
import type { TooltipPlacement } from 'antd/es/tooltip'
import { AxMuiIcon } from '../mui-icon/AxMuiIcon.tsx'

export type AxMenuIconProps = {
  icon: ReactElement
  label: string
  title?: string
  placement?: TooltipPlacement
  onClick?: () => void
}

export const AxMenuBox = observer((props: AxMenuIconProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const myIcon = cloneElement(props.icon, { size: '20px', className: 'ax-menu-box_icon' })
  return (
    <Tooltip title={props.title} placement={props.placement}>
      <button className="ax-menu-box" onClick={props.onClick}>
        <Flex align="center" justify="space-between" gap="small" style={{ height: '100%' }}>
          {myIcon}
          <p className="ax-menu-box_text">{props.label}</p>
          <AxMuiIcon icon="mdiMenuDown" size="16px" className="ax-menu-box_down" />
        </Flex>
      </button>
    </Tooltip>
  )
})
