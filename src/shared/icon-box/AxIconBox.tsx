import { observer } from 'mobx-react-lite'
import { cloneElement, type ReactElement } from 'react'
import { Flex } from 'antd'

export type AxMenuIconProps = {
  icon: ReactElement
}

export const AxIconBox = observer((props: AxMenuIconProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const myIcon = cloneElement(props.icon, { size: '16px', className: 'ax-menu-icon_icon' })
  return (
    <Flex align="center" justify="center" style={{ width: '24px', height: '24px' }}>
      {myIcon}
    </Flex>
  )
})
