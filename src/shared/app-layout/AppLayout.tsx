import { Outlet, Link, useLocation } from 'react-router-dom'
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Input,
  Layout,
  Space,
  Tooltip,
  Typography,
  theme,
} from 'antd'
import {
  AppstoreOutlined,
  BellOutlined,
  CheckSquareOutlined,
  ClockCircleOutlined,
  CloudOutlined,
  DownOutlined,
  FileTextOutlined,
  HomeOutlined,
  MessageOutlined,
  PaperClipOutlined,
  ProductOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  SettingOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import './app-layout.scss'

const { Header, Footer, Sider, Content } = Layout
const { Text } = Typography

type NavItem = { key: string; icon: React.ReactNode; label: string; to?: string; badge?: number }

export function AppLayout() {
  const { t } = useTranslation()
  const location = useLocation()
  const { token } = theme.useToken()

  const primaryNav: NavItem[] = [
    { key: '/', to: '/', icon: <HomeOutlined />, label: t('nav.home') },
    { key: '/main', to: '/main', icon: <FileTextOutlined />, label: t('nav.docs') },
    { key: '/tasks', icon: <CheckSquareOutlined />, label: t('nav.tasks') },
    { key: '/team', icon: <TeamOutlined />, label: t('nav.team') },
    { key: '/settings', icon: <SettingOutlined />, label: t('nav.settings') },
  ]

  const tools: NavItem[] = [
    { key: 'comments', icon: <MessageOutlined />, label: t('nav.comments'), badge: 4 },
    { key: 'activity', icon: <BellOutlined />, label: t('nav.activity'), badge: 12 },
    { key: 'attachments', icon: <PaperClipOutlined />, label: t('nav.attachments') },
    { key: 'apps', icon: <AppstoreOutlined />, label: t('nav.apps') },
  ]

  const renderRailItem = (it: NavItem, side: 'left' | 'right') => {
    const active = it.to ? location.pathname === it.key : false
    const icon = (
      <span
        className={`app-layout__rail-item${active ? ' app-layout__rail-item--active' : ''}`}
        style={{
          color: active ? token.colorPrimary : token.colorTextSecondary,
          background: active ? token.controlItemBgActive : 'transparent',
        }}
      >
        {it.badge ? (
          <Badge count={it.badge} size="small" offset={[2, -2]}>
            {it.icon}
          </Badge>
        ) : (
          it.icon
        )}
      </span>
    )
    const wrapped = it.to ? <Link to={it.to}>{icon}</Link> : <button type="button">{icon}</button>
    return (
      <Tooltip key={it.key} placement={side === 'left' ? 'right' : 'left'} title={it.label}>
        {wrapped}
      </Tooltip>
    )
  }

  return (
    <Layout className="app-layout">
      <Header
        className="app-layout__top"
        style={{
          background: token.colorBgContainer,
          borderBottom: `1px solid ${token.colorBorderSecondary}`,
        }}
      >
        <Space size="middle" align="center" className="app-layout__top-left">
          <span className="app-layout__brand" style={{ color: token.colorPrimary }}>
            <ProductOutlined style={{ fontSize: 20 }} />
            <Text strong style={{ color: token.colorPrimary, fontSize: 15 }}>{t('app.name')}</Text>
          </span>
          <Dropdown
            menu={{ items: [{ key: 'p1', label: 'Project Name' }, { key: 'p2', label: 'Other Project' }] }}
            trigger={['click']}
          >
            <Button type="text" size="small">
              <Space size={4}><Text>Project Name</Text><DownOutlined style={{ fontSize: 10 }} /></Space>
            </Button>
          </Dropdown>
        </Space>

        <Input
          size="small"
          prefix={<SearchOutlined style={{ color: token.colorTextTertiary }} />}
          placeholder={t('app.search')}
          className="app-layout__search"
        />

        <Space size="small" align="center">
          <Tooltip title={t('nav.help')}>
            <Button type="text" size="small" icon={<QuestionCircleOutlined />} />
          </Tooltip>
          <Tooltip title={t('nav.activity')}>
            <Badge count={3} size="small" offset={[-4, 4]}>
              <Button type="text" size="small" icon={<BellOutlined />} />
            </Badge>
          </Tooltip>
          <Avatar size="small" style={{ background: token.colorPrimary }}>U</Avatar>
        </Space>
      </Header>

      <Layout className="app-layout__middle">
        <Sider
          width={48}
          theme="light"
          className="app-layout__rail"
          style={{
            background: token.colorBgContainer,
            borderRight: `1px solid ${token.colorBorderSecondary}`,
          }}
        >
          <nav className="app-layout__rail-nav">
            {primaryNav.map((it) => renderRailItem(it, 'left'))}
          </nav>
        </Sider>

        <Content className="app-layout__content" style={{ background: token.colorBgLayout }}>
          <Outlet />
        </Content>

        <Sider
          width={48}
          theme="light"
          className="app-layout__rail"
          style={{
            background: token.colorBgContainer,
            borderLeft: `1px solid ${token.colorBorderSecondary}`,
          }}
        >
          <nav className="app-layout__rail-nav">
            {tools.map((it) => renderRailItem(it, 'right'))}
          </nav>
        </Sider>
      </Layout>

      <Footer
        className="app-layout__bottom"
        style={{
          background: token.colorBgContainer,
          borderTop: `1px solid ${token.colorBorderSecondary}`,
        }}
      >
        <Space size="middle">
          <Space size={6}>
            <Badge status="success" />
            <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>{t('status.connected')}</Text>
          </Space>
          <Space size={6}>
            <CloudOutlined style={{ color: token.colorTextSecondary }} />
            <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>{t('status.synced')}</Text>
          </Space>
        </Space>

        <Space size="middle">
          <Avatar.Group max={{ count: 5 }} size="small">
            {['L', 'M', 'P', 'R', 'K', 'A'].map((c) => (
              <Avatar key={c} size="small">{c}</Avatar>
            ))}
          </Avatar.Group>
          <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
            {t('status.membersOnline', { count: 6 })}
          </Text>
        </Space>

        <Space size="middle">
          <Space size={6}>
            <ClockCircleOutlined style={{ color: token.colorTextSecondary }} />
            <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>{t('status.lastSaved', { time: '12m ago' })}</Text>
          </Space>
          <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>v0.1.0</Text>
        </Space>
      </Footer>
    </Layout>
  )
}
