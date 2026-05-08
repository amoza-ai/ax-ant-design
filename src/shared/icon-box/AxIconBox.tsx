import { observer } from 'mobx-react-lite'
import { cloneElement, isValidElement, type ReactElement } from 'react'
import { Flex } from 'antd'
import { AxMuiIcon } from '../mui-icon/AxMuiIcon.tsx'

export type AxMenuIconProps = {
  icon: string | ReactElement
}

export const AxIconBox = observer((props: AxMenuIconProps) => {
  const myIcon = isValidElement(props.icon) ? (
    cloneElement(props.icon, { size: '20px', className: 'ax-icon-box_icon' } as never)
  ) : (
    <AxMuiIcon icon={props.icon} size="20px" className="ax-icon-box_icon" />
  )
  return (
    <Flex align="center" justify="center" style={{ width: '24px', height: '24px' }} className="ax-icon-box">
      {myIcon}
    </Flex>
  )
})
