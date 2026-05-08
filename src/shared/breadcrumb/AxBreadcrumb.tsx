import { observer } from 'mobx-react-lite'
import { cloneElement, type ReactElement } from 'react'
import { Flex, Tooltip } from 'antd'
import type { TooltipPlacement } from 'antd/es/tooltip'

export type AxMenuIconProps = {
  icon: ReactElement
  label: string
  title?: string
  placement?: TooltipPlacement
  onClick?: () => void
}

export const AxBreadcrumb = observer((props: AxMenuIconProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const myIcon = cloneElement(props.icon, { size: '16px', className: 'ax-breadcrumb_icon' })
  return (
    <Tooltip title={props.title} placement={props.placement}>
      <button className="ax-breadcrumb" onClick={props.onClick}>
        <Flex align="center" justify="space-between" gap="small" style={{ height: '100%' }}>
          {myIcon}
          <p className="ax-breadcrumb_text">{props.label}</p>
        </Flex>
      </button>
    </Tooltip>
  )
})
