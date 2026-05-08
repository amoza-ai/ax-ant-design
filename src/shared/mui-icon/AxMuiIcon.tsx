import { observer } from 'mobx-react-lite'
import * as mdiPaths from '@mdi/js'

export type MuiIconProps = {
  icon: string
  size?: string | number
  color?: string
  className?: string
}

const paths = mdiPaths as unknown as Record<string, string>

export const AxMuiIcon = observer((props: MuiIconProps) => {
  const path = paths[props.icon]
  if (!path) return null
  const size = `${props.size}px`.replace('pxpx', 'px') ?? `24px`
  return (
    <svg
      className={props.className}
      width={size}
      height={size}
      fill={props.color ?? 'currentColor'}
      viewBox="0 0 24 24"
      style={{ display: 'inline-block', width: size, height: size }}
    >
      <path d={path} />
    </svg>
  )
})
