import { observer } from 'mobx-react-lite'
import { AxMuiIcon } from '../../../shared/mui-icon/AxMuiIcon.tsx'

export const DisplayPanel = observer(() => {
  return (
    <div className="ax-display-panel">
      <div className="ax-display-panel_header">
        <div className="ax-display-panel_header_title">
          <div className="ax-display-panel_header_title_icon">
            <AxMuiIcon icon="mdiCameraMeteringMatrix" size="20px" />
          </div>
          <div className="ax-display-panel_header_title_text">Display Panel</div>
        </div>
        <div className="ax-display-panel_header_actions">
          <button className="ax-display-panel_header_action_button">
            <AxMuiIcon icon="mdiDotsVertical" className="ax-display-panel_header_action_button_icon" size="20px" />
          </button>
        </div>
      </div>
      <div className="ax-display-panel_body">content</div>
    </div>
  )
})
