import { observer } from 'mobx-react-lite'
import { Group, Panel, Separator } from 'react-resizable-panels'
import { theme } from 'antd'
import { DocumentTabs } from './parts/DocumentTabs'
import { TaskListPanel } from './parts/TaskListPanel'
import { OutlinePanel } from './parts/OutlinePanel'
import { DocumentPanel } from './parts/DocumentPanel'
import { CommentsPanel } from './parts/CommentsPanel'
import './main-view.scss'

export const MainView = observer(function MainView() {
  const { token } = theme.useToken()

  const sepStyle: React.CSSProperties = { background: token.colorBorderSecondary }

  return (
    <div className="main-view">
      <DocumentTabs />
      <Group className="main-view__panels">
        <Panel id="tasks" defaultSize={18} minSize={10}>
          <TaskListPanel />
        </Panel>
        <Separator className="main-view__handle" style={sepStyle} />
        <Panel id="outline" defaultSize={18} minSize={10}>
          <OutlinePanel />
        </Panel>
        <Separator className="main-view__handle" style={sepStyle} />
        <Panel id="document" defaultSize={45} minSize={25}>
          <DocumentPanel />
        </Panel>
        <Separator className="main-view__handle" style={sepStyle} />
        <Panel id="comments" defaultSize={19} minSize={12}>
          <CommentsPanel />
        </Panel>
      </Group>
    </div>
  )
})
