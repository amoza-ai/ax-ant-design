import { observer } from 'mobx-react-lite'
import { Flex, Tooltip } from 'antd'
import type { TooltipPlacement } from 'antd/es/tooltip'
import { AxMuiIcon } from '../mui-icon/AxMuiIcon.tsx'

export type AxMenuIconProps = {
  name: string
  count?: number
  title?: string
  placement?: TooltipPlacement
  onClick?: () => void
}

export const AxChatItem = observer((props: AxMenuIconProps) => {
  return (
    <Flex className="ax-chat-item" align="center" justify="start" gap="small">
      <Tooltip title={props.title} placement={props.placement}>
        <button className="ax-chat-item_action" onClick={props.onClick}>
          <Flex align="center" justify="space-between" gap="small" style={{ height: '100%' }}>
            <AxMuiIcon icon="mdiAccountCircleOutline" size="20px" className="ax-chat-item_action_icon" />
            <p className="ax-chat-item_action_name">{props.name}</p>
            <p className="ax-chat-item_action_count">{props.count}</p>
          </Flex>
        </button>
      </Tooltip>
      <button className="ax-chat-item_close" onClick={props.onClick}>
        <AxMuiIcon icon="mdiWindowClose" size="16px" className="ax-chat-item_close_icon" />
      </button>
    </Flex>
  )
})
